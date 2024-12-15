'use client'
import React, { useState } from "react";

export default function TerminalForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input submission based on step
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    // Call an API to handle the submitted data if needed
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, description }),
    });

    if (response.ok) {
      setIsSubmitted(true);
    }
  };

  const handleRestart = () => {
    setEmail("");
    setName("");
    setDescription("");
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <div className=" h-96 w-[82%] md:w-full max-w-3xl cursor-text overflow-y-scroll rounded-lg bg-slate-950/70 font-mono shadow-xl backdrop-blur">
      <div className="sticky top-0 flex w-full items-center  gap-1 bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="absolute left-[50%] -translate-x-[50%] text-sm font-semibold text-slate-200">
          Contact@JehadurRE.me
        </span>
      </div>

      <div className="p-2 text-lg text-slate-100">
        {/* Initial Prompt */}
        {step === 1 && (
          <>
            <p>Hey there! I'm excited to link 🔗</p>
            <p className="overflow-hidden whitespace-nowrap font-light">
              ------------------------------------------------------------------------
            </p>
            <p>
              To start, could you give us <span className="text-violet-300">your email?</span>
            </p>
            <input
              type="email"
              className="mt-1 w-full bg-slate-800 p-1 text-emerald-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              onKeyDown={(e) => {
                if (e.key === "Enter" && email) handleNextStep();
              }}
            />
          </>
        )}

        {/* Display Email and ask for Name */}
        {step === 2 && (
          <>
            <p className="text-emerald-300">{email}</p>
            <p>
              Awesome! And what's <span className="text-violet-300">your name?</span>
            </p>
            <input
              type="text"
              className="mt-1 w-full bg-slate-800 p-1 text-emerald-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              onKeyDown={(e) => {
                if (e.key === "Enter" && name) handleNextStep();
              }}
            />
          </>
        )}

        {/* Display Name and ask for Description */}
        {step === 3 && (
          <>
            <p className="text-emerald-300">{name}</p>
            <p>
              Perfect, and <span className="text-violet-300">how can we help you?</span>
            </p>
            <input
              type="text"
              className="mt-1 w-full bg-slate-800 p-1 text-emerald-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your needs"
              onKeyDown={(e) => {
                if (e.key === "Enter" && description) handleNextStep();
              }}
            />
          </>
        )}

        {/* Final Display of Collected Info */}
        {step === 4 && !isSubmitted && (
          <>
            <p className="text-emerald-300">{description}</p>
            <p>Beautiful! Here's what we've got:</p>
            <p>
              <span className="text-blue-300">email:</span> {email}
            </p>
            <p>
              <span className="text-blue-300">name:</span> {name}
            </p>
            <p>
              <span className="text-blue-300">description:</span> {description}
            </p>
            <p>Look good?</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={handleRestart}
                className="rounded bg-slate-100 px-3 py-1 text-base text-black transition-opacity hover:opacity-90"
              >
                Restart
              </button>
              <button
                onClick={handleSubmit}
                className="rounded bg-indigo-500 px-3 py-1 text-base text-white transition-opacity hover:opacity-90"
              >
                Send it!
              </button>
            </div>
          </>
        )}

        {/* Confirmation Message after Submission */}
        {isSubmitted && (
          <p className="text-green-500">
            Thank you for reaching out! We’ll get back to you shortly.
          </p>
        )}
      </div>
    </div>
  );
}
