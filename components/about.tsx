"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "components/ui/card"; // Ensuring correct import statement
import { CodeIcon, PenToolIcon, UsersIcon } from "lucide-react";
import Image from "next/image"; // Importing Image component

const services = [
  {
    icon: <CodeIcon className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern technologies and best practices.",
  },
  {
    icon: <PenToolIcon className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
  },
  {
    icon: <UsersIcon className="h-10 w-10 text-primary" />,
    title: "Consultation",
    description:
      "Providing expert advice on technology stack, architecture, and development processes.",
  },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        {/* Single ref wrapper */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-medium mb-2"
          >
            About Me
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Background & Services
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-600/20 animate-gradient-xy"></div>
              <Image // Using Image component from next/image
                src="/Image/code.jpg"
                alt="Working on code"
                className="w-full h-full object-cover mix-blend-overlay"
                width={500} // Specify appropriate width
                height={300} // Specify appropriate height
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-foreground/80 mb-6">
              I am a Full Stack Developer proficient in React.js, Next.js,
              Node.js, and MongoDB. I specialize in scalable web applications,
              API development, authentication, cloud deployment, and DevOps.
              Passionate about solving real-world problems through clean,
              efficient, and maintainable code. 🚀
            </p>
            <p className="text-foreground/80 mb-8">
              My web development journey began two years ago, during which I&apos;ve
              built diverse projects, including e-commerce platforms and content
              management systems. I continuously explore emerging technologies,
              refining my skills to develop scalable, efficient, and
              user-focused solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Name:</h4>
                <p className="text-foreground/80">Shivam Shekhawat</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p className="text-foreground/80">
                  shivamshekhawat2003@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location:</h4>
                <p className="text-foreground/80">Gurugram, India</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability:</h4>
                <p className="text-foreground/80">Full-time</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
