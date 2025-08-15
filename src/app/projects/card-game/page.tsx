     "use client";
     import { useState, useEffect } from "react";
     import { ref, set, onValue } from "firebase/database";
     //import { db } from "@/lib/firebase";
     import { db } from "@/lib/firebase";

     export default function CardGame() {
       const [playerName, setPlayerName] = useState("");
       const [roomId, setRoomId] = useState("room1");
       const [gameState, setGameState] = useState({ players: [], deck: [], currentPlayer: 0 });
       const [joined, setJoined] = useState(false);

       useEffect(() => {
         const gameRef = ref(db, `games/${roomId}`);
         onValue(gameRef, (snapshot) => {
           const data = snapshot.val();
           if (data) setGameState(data);
         });
       }, [roomId]);

       const joinGame = () => {
         if (playerName) {
           const newPlayers = [...gameState.players, playerName];
           const deck = Array.from({ length: 10 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
           set(ref(db, `games/${roomId}`), { players: newPlayers, deck, currentPlayer: 0 });
           setJoined(true);
         }
       };

       const playCard = () => {
         if (gameState.players[gameState.currentPlayer] === playerName) {
           const newDeck = [...gameState.deck];
           newDeck.shift(); // Remove top card
           set(ref(db, `games/${roomId}`), {
             ...gameState,
             deck: newDeck,
             currentPlayer: (gameState.currentPlayer + 1) % gameState.players.length,
           });
         }
       };

       return (
         <div className="space-y-4">
           <h1 className="text-3xl font-bold">Multi-Player Card Game</h1>
           {!joined ? (
             <div>
               <input
                 type="text"
                 placeholder="Enter your name"
                 className="p-2 bg-gray-700 rounded text-white"
                 value={playerName}
                 onChange={(e) => setPlayerName(e.target.value)}
               />
               <button
                 className="ml-2 p-2 bg-pink-500 rounded hover:bg-pink-600"
                 onClick={joinGame}
               >
                 Join Game
               </button>
             </div>
           ) : (
             <div>
               <p>Players: {gameState.players.join(", ")}</p>
               <p>Current Player: {gameState.players[gameState.currentPlayer]}</p>
               <p>Top Card: {gameState.deck[0] || "None"}</p>
               <button
                 className="p-2 bg-pink-500 rounded hover:bg-pink-600"
                 onClick={playCard}
                 disabled={gameState.players[gameState.currentPlayer] !== playerName}
               >
                 Play Card
               </button>
             </div>
           )}
         </div>
       );
     }
