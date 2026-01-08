import HeaderTitle from "@/components/shared/HeaderTitle";
import { ConnectionStatusDebugCompact } from "@/components/study-wager/ConnectionStatusDebugCompactCard";
import CreateWagerForm from "@/components/study-wager/CreateWager";
import JoinWagerForm from "@/components/study-wager/JoinWagerForm";
import RulesCard from "@/components/study-wager/RulesCard";
import WagerRoomCard from "@/components/study-wager/WagerRoomCard";
import React from "react";

export default function StudyWagerPage() {
  return (
    <div className="container py-20 space-y-6">
      <HeaderTitle
        title="Study Wager Session"
        description="Create or join a high-stakes study session"
        className="-space-y-3"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
        <RulesCard />
        <CreateWagerForm />
        <JoinWagerForm />
        <WagerRoomCard />
        <ConnectionStatusDebugCompact />
      </div>
    </div>
  );
}
