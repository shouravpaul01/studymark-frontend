import { Users, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ClassCardProps {
  subject: string;
  instructor: string;
  description: string;
  joinedCount: number;
  isLive?: boolean;
  timeAgo?: string;
}

const ClassCard = ({
  subject,
  instructor,
  description,
  joinedCount,
  isLive = false,
  timeAgo,
}: ClassCardProps) => {
  return (
    <Card className="relative overflow-hidden w-full max-w-md shadow-none">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full  bg-green-500/10" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-32 rounded-full bg-primary/10" />
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-gray-800">
              {subject}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              with <span className="font-medium">{instructor}</span>
            </p>
          </div>

          {isLive && (
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary rounded-full"
            >
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Live
              </span>
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {joinedCount} joined
            </span>

            {isLive ? (
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                Live chat
              </span>
            ) : (
              timeAgo && (
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {timeAgo} ago
                </span>
              )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
