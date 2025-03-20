'use client';
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  roles: z.array(z.string()).min(1, "Please select at least one option"),
});

const SignupCta = () => {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      roles: [],
    },
  });

  const handleSubmit = async (data) => {
    try {
      setStatus("loading");
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          roles: data.roles,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send request");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again.");
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="lg:w-[400px] flex flex-col">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roles"
                render={() => (
                  <FormItem className="mt-5">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={form.watch("roles").includes("architect")}
                              onCheckedChange={(checked) => {
                                const roles = form.watch("roles");
                                if (checked) {
                                  form.setValue("roles", [...roles, "architect"]);
                                } else {
                                  form.setValue("roles", roles.filter(role => role !== "architect"));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium leading-none">
                            I'm an Architect
                          </FormLabel>
                        </div>

                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={form.watch("roles").includes("designer")}
                              onCheckedChange={(checked) => {
                                const roles = form.watch("roles");
                                if (checked) {
                                  form.setValue("roles", [...roles, "designer"]);
                                } else {
                                  form.setValue("roles", roles.filter(role => role !== "designer"));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium leading-none">
                            I'm a Designer
                          </FormLabel>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={form.watch("roles").includes("contractor")}
                              onCheckedChange={(checked) => {
                                const roles = form.watch("roles");
                                if (checked) {
                                  form.setValue("roles", [...roles, "contractor"]);
                                } else {
                                  form.setValue("roles", roles.filter(role => role !== "contractor"));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium leading-none">
                            I'm a Contractor
                          </FormLabel>
                        </div>

                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={form.watch("roles").includes("other")}
                              onCheckedChange={(checked) => {
                                const roles = form.watch("roles");
                                if (checked) {
                                  form.setValue("roles", [...roles, "other"]);
                                } else {
                                  form.setValue("roles", roles.filter(role => role !== "other"));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium leading-none">
                            Other
                          </FormLabel>
                        </div>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignupCta;
