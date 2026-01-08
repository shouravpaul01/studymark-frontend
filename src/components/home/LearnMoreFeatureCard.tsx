import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  href?: string;
  iconClassName: string;
  /** style override props */
  className?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  linkClassName?: string;
}

export default function LearnMoreFeatureCard({
  icon,
  title,
  description,
  href = "#",

  className,
  iconWrapperClassName,
  iconClassName,
  titleClassName,
  descriptionClassName,
  linkClassName,
}: FeatureCardProps) {
  const IconComponent = (Icons[icon] as LucideIcon) || Icons.HelpCircle;

  return (
    <Card
      className={cn(
        "group rounded-2xl border  bg-white transition shadow-none hover:shadow-xl hover:duration-500 hover:scale-105 hover:border-none",
        className
      )}
    >
      <CardContent className="p-6 space-y-4">
        {/* Icon */}
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600",
            iconWrapperClassName
          )}
        >
          <IconComponent size={24} className={`${iconClassName}`} />
        </div>

        {/* Title */}
        <h3
          className={cn("text-xl font-semibold text-gray-900", titleClassName)}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            descriptionClassName
          )}
        >
          {description}
        </p>

        {/* Link */}
        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium text-teal-600   duration-200",
            linkClassName,
            
          )}
        >
          Learn more <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 "/>
        </Link>
      </CardContent>
    </Card>
  );
}