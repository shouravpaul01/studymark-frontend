import { CheckCircle2, Clock, Users, Trophy } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Set Start Time",
    description:
      "You and your friend agree on when your study session begins. Synchronize your schedules.",
  },
  {
    icon: Users,
    title: "Both Join Session",
    description:
      "Once both of you are on the page and the time hits, the timer starts automatically.",
  },
  {
    icon: CheckCircle2,
    title: "Stay Until End",
    description:
      "Whoever leaves the page first loses. Simple as that. No excuses, no second chances.",
  },
  {
    icon: Trophy,
    title: "Claim Victory",
    description:
      "The winner walks away with victory — and possibly the wager if you added one.",
  },
];

export function SessionSteps() {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-center gap-5">
          {/* Vertical Line */}
          {index !== steps.length - 1 && (
            <span className="absolute left-[14px] top-8 h-full w-[0.5px] bg-neutral-400 " />
          )}

          {/* Index Circle */}
          <div className="z-10 flex h-6 w-8 items-center justify-center rounded-full bg-primary text-sm text-white border-2 border-[#FAFAFA]">
            {index + 1}
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 font-semibold text-neutral-800">
              <step.icon className="h-5 w-5 text-primary" />
              {step.title}
            </div>
            <p className="text-sm text-neutral-500">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
