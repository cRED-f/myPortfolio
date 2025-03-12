"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Send, Mail, MessageSquare, User, Loader2 } from "lucide-react";
import { sendEmail } from "@/lib/action";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div
      className="min-h-[70vh] py-16 px-4 bg-gradient-to-b from-transparent to-slate-50/10 dark:to-slate-900/10 relative overflow-hidden"
      id="contact"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Get In Touch
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="backdrop-blur-sm bg-white/10 dark:bg-slate-800/40 rounded-2xl shadow-lg border border-slate-200/20 dark:border-slate-700/20 p-8 transition-all hover:shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <motion.div
              className="flex-1 w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-xl bg-blue-500/10 dark:bg-blue-500/5 p-4 flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-5 w-5 text-blue-500" />
                </motion.div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:mrislam.fahim@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    mrislam.fahim@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-xl bg-purple-500/10 dark:bg-purple-500/5 p-4 flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                </motion.div>
                <div>
                  <p className="text-sm font-medium">Contact Form</p>
                  <p className="text-xs text-muted-foreground">
                    I&apos;ll respond as soon as possible
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <form
            action={async (formData) => {
              setIsSubmitting(true);
              try {
                const { data, error } = await sendEmail(formData);
                console.log(data);
                if (error) {
                  toast.error(
                    error || "Something went wrong. Please try again."
                  );
                  return;
                }
                toast.success(
                  "Message sent successfully! 🎉 I'll get back to you soon."
                );
                // Clear form fields
                const form = document.querySelector("form");
                if (form) form.reset();
              } finally {
                setIsSubmitting(false);
              }
            }}
            className="space-y-5"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/70" />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                className="pl-10 bg-background/50 border-slate-200 dark:border-slate-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
            >
              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/70" />
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                className="pl-10 bg-background/50 border-slate-200 dark:border-slate-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/70" />
              <Textarea
                name="message"
                placeholder="Your message..."
                className="pl-10 pt-2 bg-background/50 border-slate-200 dark:border-slate-700 h-[10rem] rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500/20 resize-none transition-all"
                required
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <Button
                className="w-full md:w-auto px-8 py-6 rounded-lg bg-gradient-to-r text-black bg-sky-500/10 dark:bg-purple-500/5 hover:from-blue-500 hover:to-purple-500 dark:text-white shadow-md hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden group"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full opacity-10 group-hover:w-32 group-hover:h-32 start-0 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"></span>
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
