"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  investorType: z.array(z.string()).min(1, "Select at least one investor type"),
  investmentRange: z.string({
    required_error: "Please select an investment range",
  }),
});

export default function InquiryForm({formTranslations}) {
  const [status, setStatus] = useState("idle");

  const investorTypes = [
    { id: "accredited", label: `${formTranslations.investorType.options.option1}` },
    {
      id: "non_accredited",
      label: `${formTranslations.investorType.options.option2}`,
    },
    { id: "venture_fund", label: `${formTranslations.investorType.options.option3}` },
    { id: "corporate_fund", label: `${formTranslations.investorType.options.option4}` },
    { id: "family_office", label: `${formTranslations.investorType.options.option5}` },
  ];

  const investmentRanges = [
    { value: "10000_or_less", label: `${formTranslations.investmentRange.options.option1}` },
    {
      value: "10000_to_50000",
      label: `${formTranslations.investmentRange.options.option2}`,
    },
    { value: "50000_to_100000", label: `${formTranslations.investmentRange.options.option3}` },
    { value: "100000_or_more", label: `${formTranslations.investmentRange.options.option4}` },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      investorType: [],
      investmentRange: "",
    },
  });

  async function onSubmit(data) {
    try {
      setStatus("loading");
      // Add your form submission logic here
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-[#f5f5f7]">
                {formTranslations.firstName}
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-inherit border-gray-300 h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-[#f5f5f7]">
                {formTranslations.lastName}
              </FormLabel>
              <FormControl>
                <Input {...field} className="bg-inherit border-gray-300 h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-[#f5f5f7]">{formTranslations.email}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="bg-inherit border-gray-300 h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-3">
          <FormLabel className="text-lg text-[#f5f5f7]">
            {formTranslations.investorType.title}
          </FormLabel>
          {investorTypes.map((type) => (
            <FormField
              key={type.id}
              control={form.control}
              name="investorType"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(type.id)}
                      onCheckedChange={(checked) => {
                        const updatedValue = checked
                          ? [...field.value, type.id]
                          : field.value?.filter((value) => value !== type.id);
                        field.onChange(updatedValue);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-lg text-[#f5f5f7] font-normal">
                    {type.label}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="mt-2 text-[#f5f5f7] space-y-1">
          <p className="text-xs font-bold">
            {formTranslations.investorType.note.title}
          </p>
          <p className="text-xs font-bold">
            {formTranslations.investorType.note.description_1}
          </p>
          <p className="text-xs font-bold">
            {formTranslations.investorType.note.description_2}
          </p>
        </div>

        <FormField
          control={form.control}
          name="investmentRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-[#f5f5f7]">
                {formTranslations.investmentRange.title}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="space-y-2"
                >
                  {investmentRanges.map((range) => (
                    <FormItem
                      key={range.value}
                      className="flex items-center space-x-2"
                    >
                      <FormControl>
                        <RadioGroupItem value={range.value} />
                      </FormControl>
                      <FormLabel className="text-lg text-[#f5f5f7] font-normal">
                        {range.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className={`mt-[18px] px-4 py-3 w-full  rounded-md
                  ${
                    status === "loading"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#f5f5f7] text-[#0a0a0b] hover:bg-[#e5e5e7]"
                  }`}
        >
          {status === "loading" ? "Sending..." : `Submit`}
        </button>
      </form>
    </Form>
  );
}
