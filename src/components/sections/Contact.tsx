"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/action";
export default function Contact() {
  const { toast } = useToast();

  return (
    <div className="h-[60vh] mt-8" id="contact">
      <h1 className="text-3xl font-bold text-center">Contact</h1>
      <p className="text-center">
        Please contact me at{" "}
        <a
          className="underline"
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        >
          mrislam.fahim@gmail.com
        </a>{" "}
        or through this form
      </p>
      <div className="max-w-2xl max-w-1xl  mx-auto mt-6">
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            console.log(data);
            if (error) {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error,
              });
            }
            toast({
              title: "Message sent!",
              description: new Date().toLocaleString(),
            });
          }}
        >
          <Input
            name="email"
            type="email"
            placeholder="Your email"
            className=" mx-auto shadow-md rounded-md"
            required
          />
          <Input
            name="subject"
            type="text"
            placeholder="Subject"
            className=" mx-auto shadow-md mt-4 rounded-md"
            required
          />
          <Textarea
            name="message"
            placeholder="Your message..."
            className=" mx-auto h-[10rem] mt-8 shadow-md rounded-md"
            required
          />
          <Button
            className="md:w-fit w-full  flex gap-2 mt-8 rounded-full"
            variant={"default"}
            type="submit"
          >
            Send
            <Send className="w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
