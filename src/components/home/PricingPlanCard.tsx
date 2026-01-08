"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";

const icons = {
  Zap,
  Crown,
  Users,
};

export function PricingPlanCard({ plan }: { plan: any }) {
  const Icon = icons[plan.icon as keyof typeof icons];

  return (
    <Card
      className={cn(
        "relative group flex flex-col rounded-3xl border p-8 shadow-none hover:bg-primary/10 hover:shadow-2xl hover:duration-500 hover:border-primary hover:scale-110 ",
        plan.popular
          ? "border-primary bg-primary/10 scale-110 shadow-2xl shadow-primary hover:shadow-3xl "
          : "bg-white "
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 ">
          {" "}
          <span className="relative flex items-center justify-center w-[130px]! h-8   rounded-full bg-primary text-white">
            <span className="absolute inline-flex h-8 w-[100px] animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative z-10 text-sm">{plan.badge}</span>
          </span>
        </div>
        // <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
        //   {plan.badge}
        // </span>
      )}

      <CardContent className="flex-1 p-0 flex flex-col">
        <div className="mb-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Icon className="h-5 w-5 text-blue-600" />
          </div>

          <h3 className="text-xl font-semibold">{plan.title}</h3>
          <p className="mt-2 text-3xl font-bold">{plan.price}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {plan.description}
          </p>
        </div>

        <ul className="space-y-3 text-neutral-700">
          {plan.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <Check className="h-4 w-4 text-blue-600" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto p-0 pt-8">
        <Button
          className="w-full rounded-xl btn-secondary cursor-pointer transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
          variant={plan.variant}
          size="lg"
        >
          {plan.button}
        </Button>
      </CardFooter>
    </Card>
  );
}
