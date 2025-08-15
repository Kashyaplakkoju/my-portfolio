
     import Link from "next/link";

     export default function Projects() {
       return (
         <div className="space-y-8">
           <h1 className="text-3xl font-bold">Projects</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-gray-800 p-4 rounded-lg">
               <h2 className="text-xl font-semibold">Memory Game</h2>
               <p className="text-gray-300 mt-2">A fun memory-matching game with card flipping animations and score tracking.</p>
               <Link href="/projects/memory-game" className="text-pink-500 hover:underline mt-2 inline-block">Play Now</Link>
             </div>
             <div className="bg-gray-800 p-4 rounded-lg">
               <h2 className="text-xl font-semibold">Multi-Player Card Game</h2>
               <p className="text-gray-300 mt-2">A real-time multiplayer card game using Firebase.</p>
               <Link href="/projects/card-game" className="text-pink-500 hover:underline mt-2 inline-block">Play Now</Link>
             </div>
           </div>
         </div>
       );
     }