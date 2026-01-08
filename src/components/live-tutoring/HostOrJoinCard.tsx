"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Users } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const HostOrJoinCard = () => {
  const [selectedOption, setSelectedOption] = useState<"host" | "join" | null>(
    null
  );
  const [participantCount, setParticipantCount] = useState<string>("");

  const handleOptionClick = (option: "host" | "join") => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === "host" && participantCount) {
      console.log(`Hosting session with ${participantCount} participants`);
      // Navigate to host session form
    } else if (selectedOption === "join") {
      console.log("Joining a session");
      // Navigate to join session page
    }
  };

  const isContinueDisabled =
    selectedOption === "host" ? !participantCount : !selectedOption;

  return (
    <Card className="shadow-none">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Users className="text-primary" />
          </div>
          <CardTitle className="text-xl font-bold text-neutral-900">
            Host or Join
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Radio-like selection options */}
        <div className="space-y-4">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 bg-[#F3F4F680] p-4 rounded-xl">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">
                I want to Host a tutoring session
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-[#F3F4F680] p-4 rounded-xl">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">
                I want to Join a tutoring session
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-gray-700 font-medium">
            Number of participants (excluding you)
          </Label>
          <Input
            type="number"
            min="1"
            max="100"
            placeholder="Enter a number"
            value={participantCount}
            onChange={(e) => setParticipantCount(e.target.value)}
            className="h-12 text-lg"
          />
         
        </div>
        <Button className=" px-10">Join</Button>
      </CardContent>
    </Card>
  );
};

export default HostOrJoinCard;
