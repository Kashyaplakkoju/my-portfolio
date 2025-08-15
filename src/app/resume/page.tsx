
     "use client";
     import { useState } from "react";
     import { motion } from "framer-motion";

     export default function Resume() {
       const [activeTab, setActiveTab] = useState("experience");

       return (
         <div className="space-y-8">
           <h1 className="text-3xl font-bold">Interactive Resume</h1>
           <div className="flex space-x-4">
             <button
               className={`px-4 py-2 rounded ${activeTab === "experience" ? "bg-pink-500" : "bg-gray-700"}`}
               onClick={() => setActiveTab("experience")}
             >
               Experience
             </button>
             <button
               className={`px-4 py-2 rounded ${activeTab === "skills" ? "bg-pink-500" : "bg-gray-700"}`}
               onClick={() => setActiveTab("skills")}
             >
               Skills
             </button>
           </div>

           {activeTab === "experience" && (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
             >
               <h2 className="text-2xl font-semibold mb-4">Experience</h2>
               <div className="space-y-4">
                 <div>
                   <h3 className="font-semibold">Web Developer at [Company] (2023-Present)</h3>
                   <p className="text-gray-300">Developed modern web applications using React and Next.js.</p>
                 </div>
                 <div>
                   <h3 className="font-semibold">Intern at [Company] (2022-2023)</h3>
                   <p className="text-gray-300">Assisted in frontend development and UI design.</p>
                 </div>
               </div>
             </motion.div>
           )}

           {activeTab === "skills" && (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
             >
               <h2 className="text-2xl font-semibold mb-4">Skills</h2>
               <div className="space-y-4">
                 {[
                   { name: "JavaScript", level: 90 },
                   { name: "React", level: 85 },
                   { name: "TypeScript", level: 80 },
                 ].map((skill) => (
                   <div key={skill.name}>
                     <span className="block text-gray-300">{skill.name}</span>
                     <div className="w-full bg-gray-700 rounded-full h-2.5">
                       <motion.div
                         className="bg-pink-500 h-2.5 rounded-full"
                         initial={{ width: 0 }}
                         animate={{ width: `${skill.level}%` }}
                         transition={{ duration: 1 }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
           )}
         </div>
       );
     }
