import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Card } from "../ui/card";

export function HowWorkCard({ name, avatar, isOnline, wagered }: { 
  name: string; 
  avatar: string; 
  isOnline: boolean;
  wagered?: number;
}) {
  return (
    <Card className="p-4 relative">
     
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <Badge variant={isOnline ? "default" : "secondary"}>
              {isOnline ? "Online" : "Offline"}
            </Badge>
          </div>
        </div>
        {wagered && (
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Wagered</p>
            <p className="text-xl font-bold">${wagered}</p>
          </div>
        )}
      </div>
    </Card>
  );
}