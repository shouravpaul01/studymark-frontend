"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Send,  Loader } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name must not exceed 50 characters.",
    }),
  feedback: z
    .string()
    .min(10, {
      message: "Feedback must be at least 10 characters.",
    })
    .max(500, {
      message: "Feedback must not exceed 500 characters.",
    }),
  postPublicly: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

export default function FeedbackForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      feedback: "",
      postPublicly: true,
    },
  });

  // Form submission handler
  async function onSubmit(values: FormValues) {
    console.log("Form submitted:", values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    

    setIsSubmitted(true);
    form.reset();

 
  }

  return (
    <div className="border rounded-2xl py-10  px-5 ">
  
        <div className="max-w-[600px] mx-auto">
            <h3 className="text-3xl font-bold text-center gap-3">
          
          Share Your Feedback
        </h3>
       


      <div className="pt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                  
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      
                      {...field}
                    />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Feedback Field */}
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >
                
                    Your Feedback
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your thoughts, suggestions, or concerns..."
                      className="min-h-[180px] text-baseresize-none"
                      {...field}
                    />
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Post Publicly Switch */}
            <FormField
              control={form.control}
              name="postPublicly"
              render={({ field }) => (
                <FormItem >
                  <div className="space-y-0.5">
                    <FormLabel >
                    
                      Post Publicly
                    </FormLabel>
                    <FormDescription>
                      Your feedback will be visible to other users on our
                      platform
                    </FormDescription>
                  </div>

                  <FormControl>
                    <RadioGroup
                      value={field.value ? "yes" : "no"}
                      onValueChange={(value) => field.onChange(value === "yes")}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="public-yes" />
                        <label
                          htmlFor="public-yes"
                          className="text-sm font-medium"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="public-no" />
                        <label
                          htmlFor="public-no"
                          className="text-sm font-medium"
                        >
                          No
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className=" w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader className="w-5 h-5  animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Feedback
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
        </div>
    </div>
  );
}
