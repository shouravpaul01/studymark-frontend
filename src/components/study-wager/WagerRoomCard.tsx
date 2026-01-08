"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, ExternalLink, Flag, Link, Play, Timer, Trophy, Users } from "lucide-react";

export default function WagerRoomCard() {
  const handleCopyCode = () => {
    navigator.clipboard.writeText("K0BpLMQDnX");
  };

  const handleCopyLink = () => {
    // Copy room link logic here
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Card className="shadow-none">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle>Wager Room</CardTitle>
          <div className="flex items-center">
            <Button variant={"ghost"} size={"sm"}>
              <Copy />
            </Button>
            <span className="text-neutral-500">Copy Room Link</span>
          </div>
        </div>
        <div className="text-base font-mono">
          Code: <span className="ml-1 text-neutral-800">K0BpLMQDnX</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Bet Details Section */}
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2 text-center p-3 bg-[#F3F5F7]   rounded-lg">
            <p className="text-sm text-muted-foreground">Host</p>
            <p className="text-base text-neutral-700 font-semibold">
              easygone.org
            </p>
          </div>
          <div className="space-y-2 text-center p-3 bg-[#F3F5F7]  rounded-lg">
            <p className="text-sm text-muted-foreground">Host</p>
            <p className="text-base text-neutral-700 font-semibold">ABC</p>
          </div>
          <div className="space-y-2 text-center p-3 bg-[#F3F5F7]  rounded-lg">
            <p className="text-sm text-muted-foreground">Participant</p>
            <p className="text-base text-neutral-700 font-semibold">R5120</p>
          </div>
          <div className="space-y-2 text-center p-3 bg-[#F3F5F7]  rounded-lg">
            <p className="text-sm text-muted-foreground">Pot</p>
            <p className="text-base text-neutral-700 font-semibold ">R10240</p>
          </div>
          <div className="space-y-2 text-center p-3 bg-[#F3F5F7]  rounded-lg">
            <p className="text-sm text-muted-foreground">Winner</p>
            <p className="text-base text-neutral-700 font-semibold ">R8192</p>
          </div>
        </div>

        <Separator />

        {/* Instructions */}
        <div className="p-4 bg-primary/10 rounded-lg ">
          <p className="text-sm text-muted-foreground text-center">
            When both players have paid, both will see{" "}
            <strong className="text-primary">Start Session</strong>. Timer
            begins when both press it. Only{" "}
            <strong className="text-primary">Smart Notes</strong> is allowed
            during the session.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Button
          >
          <Play/>  Start Session
          </Button>
          <Button variant="secondary" >
           <Flag/> Surrender
          </Button>
          <Button variant="secondary" >
            Go to Smart Notes <ExternalLink/>
          </Button>
          <Button variant="outline" className="md:col-span-3" onClick={handleCopyLink}>
            <Link className="mr-2 h-4 w-4" />
            Copy Room Link
          </Button>
        </div>

       

        {/* Timer Section */}
        <div className="mt-6 p-4 text-center">
          
          <div className="text-4xl font-mono font-bold tracking-wider">
            00:00:00
          </div>
          <div className="flex items-center justify-center gap-2 mb-2 text-neutral-600 mt-2.5">
            <Timer className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">
              Session Timer
            </span>
          </div>
        </div>

        
      </CardContent>
    </Card>
  );
}
