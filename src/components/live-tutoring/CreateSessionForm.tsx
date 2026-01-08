"use client";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import {  Sparkles, Plus } from "lucide-react";
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
import { PaymentDialog } from "./PaymentDialog";

const formSchema = z.object({
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  instructorName: z.string().min(2, "Name must be at least 2 characters"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  isPrivate: z.boolean().default(false),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

const CreateSessionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      instructorName: "",
      date: "",
      time: "",
      isPrivate: false,
      description: "",
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
    <div className="md:col-span-2">
    <Card className=" border border-gray-200 shadow-none">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Plus className='text-primary'/>
          </div>
          <CardTitle className="text-xl font-bold text-neutral-900">
            Create a Session
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First Row - Subject & Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Subject{" "}
                      <span className="text-gray-400">(e.g., Algebra)</span>
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
                name="instructorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Your name or tutor name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter name"
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
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Time <span className="text-gray-400">(e.g., 18:00)</span>
                    </FormLabel>

                    <Input
                      type="time"
                      id="time-picker"
                      step="1"
                      defaultValue="10:30:00"
                      className=" appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Privacy Switch */}
               <FormField
                control={form.control}
                name="instructorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Session
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Private(only you)"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Description
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

            {/* Submit Button */}
            <div className="pt-4 flex gap-3">
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
                onClick={()=>setIsPaymentDialogOpen(true)}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating Session...
                  </>
                ) : (
                  <>
                    <span className="text-xl mr-2">+</span>
                    Add Session
                  </>
                )}
              </Button>
              <Button variant={"secondary"}>
                <Sparkles /> Fill Demo
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
    <PaymentDialog isDialogOpen={isPaymentDialogOpen} setIsDialogOpen={setIsPaymentDialogOpen}/>
    </div>
  );
};

export default CreateSessionForm;
