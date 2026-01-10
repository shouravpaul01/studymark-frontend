import { Clock, Globe, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

interface NoteCardProps {
  data: any;
}

const NoteCard = ({ data }: NoteCardProps) => {
  const { category, title, description, visibility, author, date } = data;
  return (
    <Card className="w-full max-w-md shadow-none relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full  bg-green-500/5" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-32 rounded-full bg-primary/5" />
      <CardHeader className="space-y-2 pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={"outline"} className="bg-primary/5 text-primary border-primary/20 rounded-full">
            {title}
          </Badge>
          <div className="flex gap-1 items-center text-sm text-neutral-500">
            <Globe className="size-4" /> {visibility}
          </div>
        </div>
        <CardTitle className="text-xl font-medium text-neutral-800">
          {category}
        </CardTitle>
      </CardHeader>

      <CardContent >
        <p className="text-neutral-600 text-base mb-4">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {author}
            </span>
          </div>
          <div className="flex gap-1 items-center text-sm text-neutral-500">
            <Clock className="size-4" /> {dayjs(date).format("MMM D, YYYY")}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
