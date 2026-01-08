"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import girlImage from "../../../public/images/happyImage.png";

export function FocusCTACard() {
  return (
    <div className="relative overflow-hidden flex items-center justify-between gap-10 rounded-3xl  px-12 py-10 bg-white shadow">
      
 
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />


      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />

      {/* Left Image */}
      <div className="relative z-10 hidden md:block ms-20 me-8">
        <Image
          src={girlImage}
          alt="CTA illustration"
          width={200}
          height={200}
          className="object-contain -mb-10"
        />
      </div>

      {/* Right Content */}
      <div className="relative z-10 flex-1">
        <h2 className="text-3xl font-bold text-neutral-900">
          Ready to turn focus into wins?
        </h2>

        <p className="mt-3 max-w-xl text-neutral-600">
          Sign up, invite a friend, and start your first wager or tutoring
          session today.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Button  >Create Account</Button>

          <Button variant="outline">
            Start a wager
          </Button>
        </div>
      </div>
    </div>
  );
}
