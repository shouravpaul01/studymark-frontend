"use client";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { z } from "zod";
import {
 
  Sparkles,
  Plus,
  Loader,
} from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const formSchema = z.object({
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  content: z.string().min(2, "Name must be at least 2 characters"),
  visibility:z.string()
});

const AddNewNoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      content: "",
      visibility:"public"
    },
  });

  const onSubmit = async (values: FieldValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Session created successfully!");
      form.reset();
    }, 1000);
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <Card className=" border border-gray-200 shadow-none h-[500px]">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Plus className="text-primary size-5" />
          </div>
          <CardTitle className="text-lg font-bold text-neutral-900">
            Add New Note
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject"
                      className="h-11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Content
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what topics will be covered, learning objectives, or any special requirements..."
                      className="min-h-[120px] resize-none shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Visibility Radio Group */}
            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-gray-700 font-medium">
                    Visibility
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="private" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          
                          Private 
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="public" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center gap-2">
                          
                          Public 
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-4 flex gap-3">
              <Button
                type="submit"
                className="flex-1 group"
                disabled={isSubmitting}
                onClick={() => setIsPaymentDialogOpen(true)}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2" />
                    Adding...
                  </>
                ) : (
                  <>
                    <Plus className="group-hover:animate-bounce"/>
                    Add Note
                  </>
                )}
              </Button>
              <Button variant="secondary" className="group">
                <Sparkles className="group-hover:animate-bounce"/> Example
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddNewNoteForm;
