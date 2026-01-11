import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function PowerfulFeaturesCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <Card className=" shadow-none  bg-white border-none">
      <CardContent className="p-6 space-y-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary">
          <Icon className="w-5 h-5 text-white" />
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}