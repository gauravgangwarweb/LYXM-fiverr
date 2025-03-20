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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { countries } from "@/lib/countries";

const formSchema = z.object({
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
  interests: z.array(z.string()).min(1, "Select at least one option"),
});

const FooterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
      interests: [],
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#f5f5f7]">First Name*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-white bg-transparent text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#f5f5f7]">Last Name*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-white bg-transparent text-white"
                />
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
              <FormLabel className="text-[#f5f5f7]">Email*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="What's your email?"
                  className="border-white bg-transparent text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#f5f5f7]">Country*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-white bg-transparent text-white">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={() => (
            <FormItem>
              <FormLabel className="text-[#f5f5f7]">
                I am interested in Vestaboard:*
              </FormLabel>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes("concerts_&_festivals")}
                            onCheckedChange={(checked) => {
                              const values = field.value || [];
                              if (checked) {
                                field.onChange([...values, "concerts_&_festivals"]);
                              } else {
                                field.onChange(values.filter((v) => v !== "concerts_&_festivals"));
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-[#f5f5f7] font-normal">
                          Concerts & Festivals
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes("weddings_&_celebrations ")}
                            onCheckedChange={(checked) => {
                              const values = field.value || [];
                              if (checked) {
                                field.onChange([...values, "weddings_&_celebrations "]);
                              } else {
                                field.onChange(values.filter((v) => v !== "weddings_&_celebrations "));
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-[#f5f5f7] font-normal">
                          Weddings & Celebrations 
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes("spiritbrands_&_activations")}
                            onCheckedChange={(checked) => {
                              const values = field.value || [];
                              if (checked) {
                                field.onChange([...values, "spiritbrands_&_activations"]);
                              } else {
                                field.onChange(values.filter((v) => v !== "spiritbrands_&_activations"));
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-[#f5f5f7] font-normal">
                        Spirit Brands & Activations
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes("corporate_&_conferences")}
                            onCheckedChange={(checked) => {
                              const values = field.value || [];
                              if (checked) {
                                field.onChange([...values, "corporate_&_conferences"]);
                              } else {
                                field.onChange(values.filter((v) => v !== "corporate_&_conferences"));
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-[#f5f5f7] font-normal">
                        Corporate & Conferences
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-[#f5f5f7] text-[#171818] hover:bg-[#e5e5e7] font-light text-lg"
        >
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export default FooterForm;