import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nru69yw",
        "template_pzdbzm3",
        "form.current",
        "-rV69wm0qc92J0Y_6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  );
}
