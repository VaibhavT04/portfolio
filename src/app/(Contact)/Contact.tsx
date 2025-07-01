"use client";

import React, { useState } from "react";
import { RiLoader5Fill } from 'react-icons/ri';

interface ContactFormState {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: string;
}

const initialState: ContactFormState = {
  errors: {
    name: undefined,
    email: undefined,
    message: undefined,
  },
};

function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setState(initialState);

    const formData = new FormData(e.currentTarget);
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
        e.currentTarget.reset();
      } else {
        setState({ errors: result.errors });
      }
    } catch (error) {
      console.log(error)
      setState({
        errors: {
          name: undefined,
          email: undefined,
          message: ["Failed to send email. Please try again later."],
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-40 ml-20 justify-center mb-30">
      <div>
        <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold text-amber-100 capitalize mb-12 md:mt-0 ">
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
            {Array.isArray(state.errors?.name)
              ? state.errors?.name.map((err: string, i: number) => (
                  <p className="text-red-500" key={i}>{err}</p>
                ))
              : state.errors?.name && (
                  <p className="text-red-500">{state.errors.name as string}</p>
                )}
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
            {Array.isArray(state.errors?.email)
              ? state.errors?.email.map((err: string, i: number) => (
                  <p className="text-red-500" key={i}>{err}</p>
                ))
              : state.errors?.email && (
                  <p className="text-red-500">{state.errors.email as string}</p>
                )}
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
            {Array.isArray(state.errors?.message)
              ? state.errors?.message.map((err: string, i: number) => (
                  <p className="text-red-500" key={i}>{err}</p>
                ))
              : state.errors?.message && (
                  <p className="text-red-500">{state.errors.message as string}</p>
                )}
          </div>
          <div className="flex justify-center">
            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
      {state?.success && <p className="text-green-600">{state.success}</p>}
    </div>
  );
}

export default ContactForm;

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-green-600 w-full text-white font-semibold px-3 py-2 rounded-lg"
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