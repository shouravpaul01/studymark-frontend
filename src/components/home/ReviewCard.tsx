"use client";

import { useMemo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import profileImage from "../../../public/images/student1.png";

interface ReviewCardProps {
  image: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  className?: string;
}

export function ReviewCard({
  data,
  bgColor,
}: {
  data: ReviewCardProps;
  bgColor?: string;
}) {
  const { name, role, review, rating } = data;

  return (
    <Card
      className={`relative rounded-[32px] p-7 pt-16 shadow-none border-none`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Avatar */}
      <div className="absolute -top-18 left-1/2 -translate-x-1/2">
        <div className="rounded-full bg-[#FAFAFA] p-3">
          <Avatar
            className={`size-24 border-8 `}
            style={{ borderColor: bgColor }}
          >
            <AvatarImage src={profileImage as any} />
            <AvatarFallback>RE</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Quote className="absolute -top-2 right-6 text-neutral-500 animate-bounce" />
      <CardContent className="p-0 flex flex-col h-[250px]">
        <p className="text-base text-neutral-700 text-justify leading-relaxed">
          {review}
        </p>

        <CardFooter className="border-t pt-4 px-0 pb-0 mt-auto">
          <div className="flex-1">
            <h4 className="text-base text-neutral-900 font-semibold">{name}</h4>
            <p className="text-neutral-700 text-sm">{role}</p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-3">
            <span className="font-medium text-neutral-800">
              {rating.toFixed(1)}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3 ${
                    i < Math.round(rating)
                      ? "fill-orange-400 text-orange-400"
                      : "text-orange-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
