"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
 
  DialogContent,

  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, useForm } from "react-hook-form";
interface IPaymentDialog {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
}

export function PaymentDialog({
  isDialogOpen,
  setIsDialogOpen,
}: IPaymentDialog) {
  const form = useForm({
    defaultValues: {
      cardholderName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  });
  const onSubmit = (values: FieldValues) => {};
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
            </DialogHeader>
            {/* Payment Details Section */}
            <div className="space-y-4">
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
            <DialogFooter>
             
              <Button type="submit" className=" w-full">Pay Now</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
