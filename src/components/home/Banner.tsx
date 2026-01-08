import { ArrowRightIcon, Cog, SparklesIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import bannerImage from "@/assets/images/banner.jpg";
import arrowImage from "@/assets/images/Arrow.png";
import { studentImages } from "@/constants";

export function Banner() {
  return (
    <section className="md:h-screen  bg-gradient-to-br from-[#EEF6FF] to-[#EDE9FF]

py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center  md:flex-row gap-32 relative">
         <div className="absolute -top-16 md:-top-10 left-0">
          <Cog className="size-12 animate-spin text-primary/50"/>
         </div>
          {/* ================= Left Content ================= */}
          <div className="flex w-full flex-col gap-6 md:w-[60%]">
             
            <Badge
              variant="outline"
              className="w-fit rounded-full border-primary/30 bg-primary/5 px-3.5 py-1.5 text-primary text-sm"
            >
              <SparklesIcon className="mr-2 h-3 w-3" />
              Built for Learners Who Want More Focus
            </Badge>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Study Smarter by Turning Focus into a Game
            </h1>

            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              Live Tutoring, Smart Notes, and Study Wagers—built to fire up your
              motivation with real stakes, real-time analytics, and beautifully
              simple tools.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button className="btn-primary">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" className="btn-secondary">
                Explore Features
              </Button>
            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div className="relative flex w-full justify-center md:w-[40%]">
            {/* Decorative Arrow */}
            <Image
              src={arrowImage}
              alt="decorative arrow"
              className="absolute -left-36 top-24 hidden animate-bounce lg:block"
            />

            <div className="relative w-full max-w-[420px]  sm:max-w-[480px]">
              <Image
                src={bannerImage}
                alt="Students collaborating in a study session"
                priority
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[380px] md:h-[450px]"
              />

              {/* ===== Glass Overlay Card ===== */}
              {/* ===== Glass Overlay Card ===== */}
              <div
                className="
    absolute
    -top-14 left-1/2 -translate-x-1/2
    w-[220px]
    rounded-xl
    border border-white/20
    bg-white/30
    p-4
    shadow-lg
    backdrop-blur-lg

    md:top-auto
    md:bottom-[-40px]
    md:left-4
    md:-translate-x-1/2
    md:w-[280px]
    md:p-5
  "
              >
                <div className="flex -space-x-4 justify-center md:justify-start">
                  {studentImages.map((student, index) => (
                    <Avatar
                      key={index}
                      className="z-10 h-10 w-10 border-2 border-white sm:h-12 sm:w-12"
                    >
                      <AvatarImage src={student.url} />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                  ))}

                  <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-medium text-white sm:h-12 sm:w-12">
                    5000+
                  </div>
                </div>

                <p className="mt-3 text-center text-sm text-gray-800 md:text-left sm:text-base">
                  More than 5,000+ students enrolled around the world
                </p>
              </div>

              {/* ===== End Overlay ===== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
