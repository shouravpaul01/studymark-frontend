
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export function WarfareFeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <Card className=" shadow-none  relative overflow-hidden">
       <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full  bg-green-500/5" />
      <div className="pointer-events-none absolute -top-16 -right-10 size-32 rounded-full bg-primary/5" />
      <CardContent className="p-6 space-y-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
