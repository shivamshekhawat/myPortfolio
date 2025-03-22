"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "components/ui/card"
import { Button } from "components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Badge } from "components/ui/badge"
import Image from 'next/image';

// This would typically come from your MongoDB database via an API
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    image: "Image/E-commerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "",
    githubUrl: "",
    category: "fullstack",
  },
  
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website with animations and contact form functionality.",
    image: "/Image/portfoilio.jpg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data from multiple APIs.",
    image: "/Image/weather.jpg",
    tags: ["HTML", "CSS","JS", "Weather API"],
    demoUrl: "https://weatherapplication07.netlify.app/",
    githubUrl: "https://github.com/shivamshekhawat/Weather-Dashboard.git",
    category: "frontend",
  },
  {
    id: 5,
    title: "Postman",
    description: "It is an API testing tool that simplifies the process of sending requests, inspecting responses, and automating tests.",
    image: "Image/postman.jpg",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://postman-clone-flame.vercel.app/",
    githubUrl: "https://github.com/shivamshekhawat/Postman-Clone.git",
    category: "backend",
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private messaging and group chat functionality.",
    image: "/Image/chat-application.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/shivamshekhawat/Chat-Application.git",
    category: "fullstack",
  },
  {
    id: 7,
    title: "Background Changer",
    description: "Allows users to dynamically switch the background of a webpage or app based on preferences or conditions.",
    image: "Image/background.jpg",
    tags: ["React", "Node.js", ],
    demoUrl: "https://backgroundchanger00.netlify.app/",
    githubUrl: "https://github.com/shivamshekhawat/BackgroundChanger.git",
    category: "frontend",
  },
  {
    id: 8,
    title: "Currency Converter",
    description: "A currency converter instantly converts one currency to another using real-time exchange rates.",
    image: "Image/currency.jpg",
    tags: ["React", "Node.js", ],
    demoUrl: "https://currencyconverter019.netlify.app/",
    githubUrl: "https://github.com/shivamshekhawat/Currency-Converter.git",
    category: "frontend",
  },
  {
    id: 9,
    title: "Password Generator",
    description: "A password generator creates strong, random passwords to enhance security and protect accounts.",
    image: "Image/password.jpg",
    tags: ["React", "Node.js", ],
    demoUrl: "https://passwordgenerator011.netlify.app/",
    githubUrl: "https://github.com/shivamshekhawat/Password-Generator.git",
    category: "frontend",
  },
  {
    id: 10,
    title: "To-Do List",
    description: "A to-do list helps organize tasks efficiently by listing, tracking, and managing daily activities.",
    image: "Image/to-do.jpg",
    tags: ["React", "Node.js", ],
    demoUrl: "https://todo-list011.netlify.app/",
    githubUrl: "https://github.com/shivamshekhawat/ToDo-List.git",
    category: "frontend",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "fullstack", name: "Full Stack" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-primary font-medium mb-2">
            My Work
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Recent Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden h-full flex flex-col bg-card hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

