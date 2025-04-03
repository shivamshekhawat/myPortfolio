'use client';
import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Academor",
    role: "Full Stack Developer",
    duration: "Aug 2023 - Oct 2023",
    points: [
      'Developed and deployed web applications using <span class="text-blue-600 font-semibold dark:text-blue-400">MERN Stack & Next.js</span>, ensuring high performance.',
      'Led the development of <span class="text-orange-400 font-bold dark:text-orange-300">🌦️ Weather Application</span>, integrating real-time APIs for accurate forecasts with an interactive UI.',
      'Created <span class="text-green-600 font-bold dark:text-green-400">🏛️ Monuments of India</span>, a visually appealing platform showcasing famous monuments, optimized for <span class="text-yellow-500 font-semibold dark:text-yellow-300">🔍 SEO & accessibility</span>.',
      "Integrated 🔗 third-party APIs to enhance user engagement and improve functionality.",
      "Implemented 🚀 SEO optimization & performance tuning, improving page speed and discoverability.",
    ],
  },
  {
    company: "Navodita Infotech",
    role: "Full Stack Developer",
    duration: "Jan 2024 - Feb 2024",
    points: [
      'Developed a <span class="text-purple-700 font-bold dark:text-purple-500">💬 Real-time Chat Application</span> using React.js and Firebase, ensuring smooth user interactions.',
      "Implemented 🔐 authentication & database management, allowing secure user logins and message storage.",
      "Optimized 🎨 UI/UX for a seamless user experience across devices.",
    ],
  },
  {
    company: "TEMS Tech Solution",
    role: "Software Developer Intern",
    duration: "Aug 2024 - Nov 2024",
    points: [
      "Worked on various 🏢 company projects, including web-based applications.",
      'Developed and deployed a <span class="text-indigo-600 font-bold dark:text-indigo-400">🌐 Company Website</span>, ensuring responsiveness and high performance.',
      "Collaborated with teams to enhance ⚡ scalability & maintainability of web solutions.",
    ],
  },
  {
    company: "Clipsi",
    role: "Software Developer Intern",
    duration: "Nov 2024 - Feb 2025",
    points: [
      'Designed and built a <span class="text-teal-700 font-bold dark:text-teal-500">🚀 Company Website</span> using Next.js, improving speed and SEO.',
      "Developed a 📊 real-time application to enhance business operations with dynamic data updates.",
      "Integrated 🔗 APIs & state management for a smooth, scalable user experience.",
    ],
  },
];

const Experience = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch issues

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md flex items-start gap-6 transition-all duration-300 
              hover:shadow-xl hover:scale-[1.02] hover:bg-gradient-to-r from-gray-100 to-gray-200 dark:hover:from-gray-800 dark:hover:to-gray-700"
            >
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Briefcase className="w-12 h-12 text-gray-800 dark:text-white" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="text-red-600 mx-1 font-medium tracking-wide cursor-pointer"
                  >
                    with
                  </motion.span>
                  <span className="text-blue-700 dark:text-blue-400 font-bold">
                    {exp.company}
                  </span>
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-300 font-medium">
                  {exp.duration}
                </p>
                <ul className="mt-3 list-disc pl-5 text-gray-900 dark:text-gray-300 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
