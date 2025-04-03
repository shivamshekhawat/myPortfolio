"use client";

import { useState } from "react";
import { useTheme } from "next-themes"; // Ensure this hook exists
import { useToast } from "components/ui/use-toast";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const { theme } = useTheme(); // Ensure theme-provider exports `useTheme`
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "✅ Message Sent!",
        description: "Thank you for your message! I&apos;ll get back to you soon.",
        variant: "default",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`flex flex-col items-center justify-center w-full min-h-screen py-16 
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2">I&apos;d love to hear from you! Send me a message and I&apos;ll reply as soon as possible.</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`w-full max-w-lg p-6 rounded-xl shadow-md space-y-4 
          ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}
