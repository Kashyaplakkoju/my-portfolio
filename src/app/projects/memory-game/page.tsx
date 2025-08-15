
     "use client";
     import { useState, useEffect } from "react";
     import { motion } from "framer-motion";

     export default function MemoryGame() {
       const [cards, setCards] = useState<number[]>([]);
       const [flipped, setFlipped] = useState<number[]>([]);
       const [matched, setMatched] = useState<number[]>([]);
       const [score, setScore] = useState(0);
       const [time, setTime] = useState(0);

       useEffect(() => {
         // Initialize 8 pairs (16 cards)
         const values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
         setCards(values.sort(() => Math.random() - 0.5));

         // Timer
         const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
         return () => clearInterval(timer);
       }, []);

       const handleFlip = (index: number) => {
         if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
           const newFlipped = [...flipped, index];
           setFlipped(newFlipped);

           if (newFlipped.length === 2) {
             const [first, second] = newFlipped;
             if (cards[first] === cards[second]) {
               setMatched([...matched, first, second]);
               setScore(score + 10);
             }
             setTimeout(() => setFlipped([]), 1000);
           }
         }
       };

       return (
         <div className="space-y-4">
           <h1 className="text-3xl font-bold">Memory Game</h1>
           <div className="flex space-x-4">
             <p>Score: {score}</p>
             <p>Time: {time}s</p>
           </div>
           <div className="grid grid-cols-4 gap-4">
             {cards.map((value, index) => (
               <motion.div
                 key={index}
                 className={`w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-2xl cursor-pointer ${
                   flipped.includes(index) || matched.includes(index) ? "bg-pink-500" : ""
                 }`}
                 onClick={() => handleFlip(index)}
                 initial={{ rotateY: 0 }}
                 animate={{ rotateY: flipped.includes(index) || matched.includes(index) ? 180 : 0 }}
                 transition={{ duration: 0.3 }}
               >
                 {flipped.includes(index) || matched.includes(index) ? value : "?"}
               </motion.div>
             ))}
           </div>
           {matched.length === cards.length && (
             <p className="text-xl text-green-500">Game Over! Final Score: {score}</p>
           )}
         </div>
       );
     }
