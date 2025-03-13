"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; // Ensure correct import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { toast } = useToast(); // Ensure toast function is available

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
        title: "✅ Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default", // Ensure this variant exists in your theme
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (_error) {
      toast({
        title: "❌ Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen py-16">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <Input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
}
