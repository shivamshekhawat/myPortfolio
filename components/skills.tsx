"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const frontendSkills = [
  { name: "HTML/CSS" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
]

const backendSkills = [
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB/ SQL" },
  { name: "RESTful APIs" },
  { name: "GraphQL" },
]

const programmingLanguages = [
  { name: "C" },
  { name: "C++" },
  { name: "Java" },
  { name: "Python" },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{ title: "Frontend Development", skills: frontendSkills },
            { title: "Backend Development", skills: backendSkills },
            { title: "Programming Languages", skills: programmingLanguages }].map((section, idx) => (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">{section.title}</h3>
              <ul className="space-y-4">
                {section.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    className="font-medium text-lg"
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {["Git", "Docker", "AWS", "Firebase", "Jest", "CI/CD", "Figma", "Responsive Design"].map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 600, damping: 10, duration: 0.15 } }}
              className="bg-card p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-100"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <motion.div
                  className="w-6 h-6 bg-primary rounded-full opacity-70"
                  whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
                ></motion.div>
              </div>
              <p className="font-medium">{tool}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
