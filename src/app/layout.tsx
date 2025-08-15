
     import type { Metadata } from "next";
     import "./globals.css";
     import Link from "next/link";

     export const metadata: Metadata = {
       title: "Your Name - Portfolio",
       description: "Personal portfolio showcasing skills, projects, and blog",
     };

     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
           <body className="bg-gray-900 text-white font-sans">
             <nav className="bg-gray-800 p-4 sticky top-0 z-10">
               <div className="max-w-6xl mx-auto flex justify-between items-center">
                 <Link href="/" className="text-2xl font-bold">Your Name</Link>
                 <ul className="flex space-x-6">
                   <li><Link href="/" className="hover:text-pink-500 transition">Home</Link></li>
                   <li><Link href="/resume" className="hover:text-pink-500 transition">Resume</Link></li>
                   <li><Link href="/blog" className="hover:text-pink-500 transition">Blog</Link></li>
                   <li><Link href="/projects" className="hover:text-pink-500 transition">Projects</Link></li>
                 </ul>
               </div>
             </nav>
             <main className="max-w-6xl mx-auto p-8">{children}</main>
           </body>
         </html>
       );
     }
