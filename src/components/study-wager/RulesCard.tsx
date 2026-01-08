import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { TriangleAlert } from "lucide-react";

export default function RulesCard() {
  const rules = [
    {
      id: 1,
      rule: (
        <>
          <strong>Two–player match only.</strong> You place a bet between you and
          another individual — max 2 players.
        </>
      ),
    },
    {
      id: 2,
      rule: (
        <>
          <strong>Equal stakes.</strong> Both players must deposit an equal amount
          between R30 and R10,000.
        </>
      ),
    },
    {
      id: 3,
      rule: (
        <>
          <strong>Start together.</strong> The timer begins only when both
          participants press Start Session.
        </>
      ),
    },
    {
      id: 4,
      rule: (
        <>
          <strong>First to leave loses.</strong> If you exit the page or press
          Surrender, you lose instantly.
        </>
      ),
    },
    {
      id: 5,
      rule: (
        <>
          <strong>Allowed navigation:</strong> You may only go to Smart Notes
          during the match. Going to any other page disqualifies you.
        </>
      ),
    },
    {
      id: 6,
      rule: (
        <>
          <strong>Layouts:</strong> Winner receives 100% of the combined pot.
          Example: $75 + $75 = $150 to winner.
        </>
      ),
    },
  ];

  return (
    <Card className="shadow-none">
      <CardHeader className="space-y-2 pb-6">
        <CardTitle className="text-lg font-bold">Study Wager — Rules</CardTitle>
        <CardDescription className="text-base text-neutral-600">
          Read the rules carefully — this is high-stakes focused study. Follow
          them to the letter:
        </CardDescription>
      </CardHeader>

      <CardContent className=" space-y-6">
        {rules.map((rule) => (
          <div key={rule.id} className="flex items-start gap-4">
            <div>
              <div className="size-7 flex items-center justify-center bg-primary/20 rounded-full text-sm text-primary font-semibold">
                {rule.id}
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed">{rule.rule}</p>
          </div>
        ))}

        <Alert className="bg-yellow-300/10 border-yellow-400 mt-12">
          <TriangleAlert className="text-amber-700!" />
        
          <AlertDescription className="text-neutral-600 ms-2 ">
           <div>
            <strong >Security note :</strong> This demo collects card-like fields only for simulation. Do{" "}
            NOT copy/paste real card numbers
            here in production.
           </div>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
