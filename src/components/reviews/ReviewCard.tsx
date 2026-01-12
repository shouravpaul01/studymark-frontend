import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

export default function ReviewCard({ data }: any) {
    const {name,role,rating,review}=data
  return (
    <Card className="border  bg-slate-50 shadow-none">
      <CardContent className="p-6">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
           {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < Math.round(rating)
                      ? "fill-orange-400 text-orange-400"
                      : "text-orange-200"
                  }`}
                />
              ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-700 mb-6 leading-relaxed italic">
          "{review}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
         
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
