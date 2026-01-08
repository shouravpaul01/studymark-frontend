"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Upload } from "lucide-react";

import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

export function LiveSessionCard() {
  return (
    <Card className="w-full  shadow-none p-0">
      {/* Header */}
      <CardHeader className=" border-b p-5">
        <CardTitle className="text-xl font-bold mb-2">Live Session</CardTitle>
        <CardDescription>Video call with integrated whiteboard</CardDescription>
      </CardHeader>

      {/* Camera + Whiteboard */}
      <CardContent className="px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Camera Preview */}
          <div className="h-80 lg:h-96 flex flex-col border rounded-xl">
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">JD</span>
              </div>
              <p className="text-muted-foreground">Your camera preview</p>
            </div>
          </div>

          {/* Whiteboard */}
          <div className="h-80 lg:h-96 flex flex-col overflow-hidden">
            <div className="flex-1 p-0">
              <Tldraw
                inferDarkMode
                persistenceKey="live-session-board"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-[#E5E7EB80] p-5 rounded-b-xl">
        <div className="w-full flex items-center justify-between gap-4 ">
          <div className="flex items-center gap-3 p-2 border-2 border-dashed rounded-xl flex-1">
            <Upload />
            <span className="text-muted-foreground">
              Drop files here or click to upload
            </span>
          </div>
          <Button>Upload</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
