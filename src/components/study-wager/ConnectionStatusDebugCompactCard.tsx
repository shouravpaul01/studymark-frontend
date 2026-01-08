import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Clock,
  CheckCircle,
  AlertTriangle,
  Wifi,
  Dot,
  CircleCheck,
} from "lucide-react";
import { Label } from "../ui/label";

export function ConnectionStatusDebugCompact() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Card className="md:col-span-2">
      <CardContent className="pt-6 space-y-4">
        <div>
          <h2 className="text-lg flex items-center gap-2">
            <Wifi className="size-5 me-2" />
            <span className="font-semibold ">Connection & Status</span>
            <span className="text-neutral-500">(Debug)</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Heartbeat (updates every 5s) and runtime status. Visible for
            demo/debugging only.
          </p>
        </div>

  
          
        <div className="flex gap-8">
           <div className="flex items-center gap-4">
            <div className="bg-green-500 size-4 rounded-full" />
            <div className="">
              <p className="text-neutral-700">Heartbeat</p>
              <p className="font-mono">{currentTime}</p>
            </div>
          </div>
           <div className="flex items-center gap-4">
            <CircleCheck className="text-green-500 size-5 " />
            <div className="">
              <p className="text-neutral-700">Session</p>
              <p className="font-mono">Ready</p>
            </div>
          </div>
        </div>

          {/* Warning Note */}
          <div >
            <p className="text-sm font-medium">
              Note: This page is a front-end demo.
            </p>
            <p className="text-xs  mt-1">
              Implement secure payment and server-side logic before accepting
              real money.
            </p>
          </div>
       
      </CardContent>
    </Card>
  );
}
