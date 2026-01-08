"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Copy } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  displayName: z.string().min(2, {
    message: "Display name must be at least 2 characters.",
  }),
  stake: z.number()
    .min(30, { message: "Minimum stake is R30" })
    .max(10000, { message: "Maximum stake is R10,000" }),
  cardholderName: z.string().min(2, {
    message: "Cardholder name must be at least 2 characters.",
  }),
  cardNumber: z.string().length(16, {
    message: "Card number must be 16 digits.",
  }),
  expiryMonth: z.string().length(2, {
    message: "Month must be 2 digits.",
  }),
  expiryYear: z.string().length(2, {
    message: "Year must be 2 digits.",
  }),
  cvv: z.string().length(3, {
    message: "CVV must be 3 digits.",
  }),
});

export default function CreateWagerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: "",
      stake: 30,
      cardholderName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle payment and code generation here
  }

  return (
    
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Create a Wager</CardTitle>
          <CardDescription>
            <div className="mt-2 p-3 bg-[#F3F5F780] rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Host</p>
                  <p className="text-sm text-muted-foreground">You</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Stake Range</p>
                  <p className="text-sm text-muted-foreground">R30 – R10,000</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Charge</p>
                  <p className="text-sm text-muted-foreground">Host pays stake now</p>
                </div>
              </div>
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Display Name Field */}
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your display name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          

              {/* Stake Field */}
              <FormField
                control={form.control}
                name="stake"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stake (R)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={30} 
                        max={10000} 
                        placeholder="Enter amount"
                        {...field}
                        onChange={e => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Minimum: R30, Maximum: R10,000
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              {/* Payment Details Section */}
              <div className="space-y-4">
                <h3 className="font-semibold">Payment Details</h3>
                
                {/* Cardholder Name */}
                <FormField
                  control={form.control}
                  name="cardholderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cardholder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name on card" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Card Number */}
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="1234 5678 9012 3456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Expiry and CVV in one row */}
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry (MM)</FormLabel>
                        <FormControl>
                          <Input placeholder="MM" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expiryYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry (YY)</FormLabel>
                        <FormControl>
                          <Input placeholder="YY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="123" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button type="submit"  className="flex-1 btn-primary">
                  Pay & Generate Code
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="px-8"
                  onClick={() => form.reset()}
                >
                  Clear
                </Button>
              </div>
            </form>
          </Form>

          {/* Access Code Section */}
          <div className="mt-8 p-4  rounded-lg bg-primary/10">
            <h3 className="mb-2">Share this access code with your friend:</h3>
            <div className="flex items-center gap-4">
              <Input placeholder="YYeerw" className="bg-white" />
              <Button variant={"ghost"}>
                <Copy/>
              </Button>
              <Button >
                Enter Room <ArrowRight/>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

  );
}