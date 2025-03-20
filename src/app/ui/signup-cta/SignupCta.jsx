'use client';
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const SignupCta = () => {
  const [email, setEmail] = useState("");
  const [isContractor, setIsContractor] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, isContractor }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send email");
    }
  };

  if (status === "success") {
    return (
      <section className="md:-mt-12 bg-[#0a0a0b] text-[#f5f5f7] pt-20 md:pt-44 pb-20 px-6 md:px-10">
        <div className="mx-auto max-w-[1440px] text-center">
          <h2 className="text-2xl md:text-[44px] font-medium">Thank you!</h2>
          <p className="mt-4 text-lg text-[#a0a7ac]">
            Check your email for the specification sheet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="md:-mt-12 bg-[#0a0a0b] text-[#f5f5f7] pt-20 md:pt-44 pb-20 px-6 md:px-10">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <div>
          <h2 className="text-2xl md:text-[44px] font-medium">
            Request the spec sheet
          </h2>
          <p className="mt-2 text-lg text-[#a0a7ac]">
            Download our latest specification sheet for Elyxm.
          </p>
        </div>
        <div className="mt-4">
          <form onSubmit={handleSubmit} className="md:w-[400px] flex flex-col">
            <Input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex items-center space-x-2 mt-5">
              <Checkbox 
                id="terms2" 
                checked={isContractor}
                onCheckedChange={setIsContractor}
              />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I'm an architect, designer or contractor
              </label>
            </div>
            {status === "error" && (
              <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className={`mt-[18px] px-4 py-3 w-full md:w-fit rounded-md
                ${status === "loading" 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-[#f5f5f7] text-[#0a0a0b] hover:bg-[#e5e5e7]"
                }`}
            >
              {status === "loading" ? "Sending..." : "Download"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupCta;
