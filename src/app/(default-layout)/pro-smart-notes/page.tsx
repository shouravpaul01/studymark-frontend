import HeaderTitle from "@/components/shared/HeaderTitle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { subscriptionFeatures, tags } from "@/constants";
import {
  ArrowRight,
  Check,
  Crown,
  Download,
  Search,
  SparklesIcon,
  Star,
  Users,
  WifiOff,
} from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="container space-y-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <Badge
            variant="outline"
            className="w-fit border-primary/30 bg-primary/10 text-primary rounded-full py-1.5 px-3.5"
          >
            <SparklesIcon className="size-3 me-2" />
            AI-Powered Study Hub
          </Badge>

          <HeaderTitle
            title="Smart Notes Pro Hub"
            description="AI-powered notes, smart search, summaries, flashcards, SRS, offline access and collaboration — behind the Pro subscription wall."
            descriptionClassName="max-w-full! text-sm"
            className="-space-y-3 md:col-span-2"
          />
        </div>
        <div>
          <Alert>
            <Star className="bg-primary rounded-lg text-white! p-1 size-9!" />

            <AlertTitle className=" flex items-center justify-between ms-4">
              <span className="flex-1">Pro Features</span>{" "}
              <Badge
                variant="outline"
                className="w-fit border-none bg-primary/10 text-primary rounded-full py-0.5 px-3.5"
              >
                Free
              </Badge>
            </AlertTitle>
            <AlertDescription className="text-neutral-500 ms-4 -mt-3">
              Unlimited AI summaries, flashcard exports, offline downloads &
              shared notes.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <div className="border rounded-2xl p-5 space-y-5">
        <div className="flex ">
          <h4 className="font-semibold flex-1">Search notes</h4>
          <span className="flex items-center text-primary text-base">
            <SparklesIcon className="size-4 me-2" />
            AI-ranked
          </span>
        </div>
        <div>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search sessions (subject, tutor, time)..."
              className="pl-10  text-base"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <Button >Search</Button>
            <Button variant={"outline"}>Clear</Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold flex-1">TAGS</h4>
          <div className="flex gap-2 flex-wrap">
            {tags.map((item, index) => (
              <Badge
                key={index}
                variant={"outline"}
                className="bg-primary/10 text-primary rounded-full"
              >
                {item.label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="font-medium text-base">Topic Clusters</h2>
          <p className="text-neutral-500 text-sm">
            AI groups will appear here after search
          </p>
        </div>
      </div>
      <div className="border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <WifiOff className="text-primary size-5" />
          </div>

          <div>
            <h4 className="text-lg font-bold text-neutral-900">
              SRS — Study Queue
            </h4>
            <p className="text-neutral-500 text-base">
              Spaced repetition system
            </p>
          </div>
        </div>
        <div className="bg-slate-50 rounded-xl text-center text-neutral-500 text-sm py-4">
          No items yet. Generate flashcards to add.
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} size={"sm"} className="rounded-full ">
            <ArrowRight />
            Review Next
          </Button>
          <Button variant={"outline"} size={"sm"} className="rounded-full ">
            <Download />
            Export (Anki)
          </Button>
        </div>
      </div>
        <div className="border rounded-2xl p-5 space-y-5">
        <div className="flex items-center gap-3">
          
            <h4 className="text-lg font-bold text-neutral-900 flex-1">
             Search Results
            </h4>
            <p className="text-neutral-500 text-sm">
             Showing sample demo notes
            </p>
          
        </div>
        <div className="bg-slate-50 rounded-xl  p-4 space-y-1.5">
          <h5 className="text-neutral-800 text-base font-semibold">Trigonometry basics</h5>
           <div className="flex gap-2 flex-wrap">
            {tags.map((item, index) => (
              <Badge
                key={index}
                variant={"outline"}
                className="bg-primary/10 text-primary rounded-full"
              >
                {item.label}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-neutral-500">Definitions: sine, cosine, tangent. Key formulae: sin^2 + cos^2 = 1. Example problems...</p>
        </div>
        
      </div>
      <div className="border rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <Crown className="text-white size-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-neutral-900">
                Subscription
              </h1>
              <p className="text-neutral-500">Unlock all Pro features</p>
            </div>
          </div>
          <ul className="space-y-4">
            {subscriptionFeatures.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-neutral-500 text-sm"
              >
                <Check className=" bg-primary/10 text-primary rounded-full p-1 " />{" "}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="bg-slate-50 rounded-2xl p-7 w-full">
            <p className="text-neutral-600">
              <span className="text-2xl font-bold">R120</span>/month
            </p>
            <p className="text-neutral-600">
              or R1,200 / year <span className="text-primary">(save 20%)</span>
            </p>
            <div className="flex gap-3 mt-2">
              <Button
                variant={"outline"}
                size={"sm"}
                className="rounded-full"
              >
                Subscribe (demo)
              </Button>
              <Button variant={"outline"} size={"sm"} className="rounded-full">
                Check
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card className="shadow-none gap-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <WifiOff className="text-primary size-5" />
              </div>
              <CardTitle className="text-lg font-bold text-neutral-900">
                Export & Offline
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <span className="text-neutral-500">
              Save notes for offline review, download as PDF/Word/Anki deck.
            </span>
            <div className="flex gap-3 mt-2">
              <Button variant={"outline"} size={"sm"} className="rounded-full">
                <Download /> Download Selected
              </Button>
              <Button variant={"outline"} size={"sm"} className="rounded-full">
                Save for Offline
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none gap-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="text-primary size-5" />
              </div>
              <CardTitle className="text-lg font-bold text-neutral-900">
                Collaboration
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent >
            <p className="text-neutral-500">
              Shared spaces, rating and community notes (premium uploads require
              verification).
            </p>

            <Button variant={"outline"} size={"sm"} className="rounded-full mt-1.5">
              Open Shared Notes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
