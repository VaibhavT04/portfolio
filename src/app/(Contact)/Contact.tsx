"use client";

import React, { useState } from "react";
import { RiLoader5Fill } from 'react-icons/ri';

const initialState: ContactFormState = {};

interface ContactFormState {
  success?: string;
}


function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setState(initialState);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setState({ success: result.success });
        if (form) {
          form.reset();
        }
        
        setTimeout(() => {
          setState(initialState);
        }, 4000);
      }
    } catch (error) {
      console.error('Error in form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <>
      <div id="contact"></div>
    <div className="flex flex-col items-center mt-40 p-10 justify-center mb-30">
      <div>
        <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize mb-12 md:mt-0 ">
          Contact Me
        </h1>
      </div>
      <div className="border-2 border-gray-800 p-10 rounded-2xl">
        <div>
          <h2 className="mt-1 text-center mb-4 text-4xl font-extrabold ">Get in Touch</h2>
          <p className="mt-1 mb-4 text-center text-lg">
            I'd love to hear from you! Fill out the form below to get in touch.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Your name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border mt-2 w-full py-2 pl-4 rounded-lg rounded-l-lg block md:inline focus:outline-slate-500 border-gray-500"
              placeholder="Enter your name..."
            />

          </div>
          <div className="mb-4">
            <label htmlFor="email">Your email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border mt-2 w-full py-2 pl-4 rounded-lg rounded-l-lg block md:inline focus:outline-slate-500 border-gray-500"
              placeholder="Enter your email..."
            />

          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              required
              cols={100}
              rows={7}
              className="border mt-2 mb-5 w-full py-3 pl-4 rounded-lg focus:outline-slate-500 border-gray-500"
              placeholder="Enter your message..."
            ></textarea>

          </div>
          <div className="flex justify-center">
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
      {state?.success && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="text-center font-medium">{state.success}</p>
        </div>
      )}
    </div>
      </>
  );
}

export default ContactForm;

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-amber-300/80 w-full text-amber-950/100 font-semibold px-3 py-2 rounded-lg"
    >
      {isSubmitting ? (
        <span>
          Submitting <RiLoader5Fill className="animate-spin" />
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
}
