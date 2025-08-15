     "use client";
     import { Bar } from "react-chartjs-2";
     import {
       Chart as ChartJS,
       CategoryScale,
       LinearScale,
       BarElement,
       Title,
       Tooltip,
       Legend,
     } from "chart.js";

     ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

     export default function Home() {
       const skillsData = {
         labels: ["JavaScript", "React", "TypeScript", "Tailwind CSS", "Node.js"],
         datasets: [
           {
             label: "Skill Level",
             data: [90, 85, 80, 75, 70],
             backgroundColor: "rgba(219, 39, 119, 0.6)",
             borderColor: "rgba(219, 39, 119, 1)",
             borderWidth: 1,
           },
         ],
       };

       return (
         <div className="space-y-12">
           {/* About Section */}
           <section>
             <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
             <p className="text-lg text-gray-300">
               I&apos;m [Your Name], a passionate web developer specializing in modern JavaScript frameworks and responsive design.
             </p>
           </section>

           {/* Skills Visualization */}
           <section>
             <h2 className="text-2xl font-semibold mb-4">Skills</h2>
             <div className="bg-gray-800 p-4 rounded-lg">
               <Bar
                 data={skillsData}
                 options={{
                   responsive: true,
                   plugins: { legend: { position: "top" }, title: { display: true, text: "My Skills" } },
                 }}
               />
             </div>
           </section>

           {/* Testimonials */}
           <section>
             <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-gray-800 p-4 rounded-lg">
                 <p className="text-gray-300">&quot;Amazing work on our project!&quot;</p>
                 <p className="text-pink-500 font-semibold mt-2">- Client 1</p>
               </div>
               <div className="bg-gray-800 p-4 rounded-lg">
                 <p className="text-gray-300">&quot;Highly skilled and reliable.&quot;</p>
                 <p className="text-pink-500 font-semibold mt-2">- Client 2</p>
               </div>
             </div>
           </section>
         </div>
       );
     }
