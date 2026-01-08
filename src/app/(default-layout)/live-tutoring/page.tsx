import ClassCard from "@/components/live-tutoring/ClassCard";
import CreateSessionForm from "@/components/live-tutoring/CreateSessionForm";
import HostOrJoinCard from "@/components/live-tutoring/HostOrJoinCard";
import { LiveSessionCard } from "@/components/live-tutoring/LiveSessionCard";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { classesData } from "@/constants";

import { Search } from "lucide-react";


export default function LiveTutoringPage() {
  return (
    <div className="container py-20 space-y-6">
      <HeaderTitle
        title="Live Tutoring Hub"
        description="Host or join live tutoring sessions with peers or tutors. Pay to host, create a
secure session code, and use the built-in video + whiteboard (after
payment/join). Browse sessions, filter quickly, request a session, or remove
sessions you've created."
        descriptionClassName="max-w-full!"
        className="-space-y-3"
      />

      {/* Search and Filter Card */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search sessions (subject, tutor, time)..."
            className="pl-10  text-base"
          />
        </div>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Subjects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="biology">Biology</SelectItem>
            <SelectItem value="english">English</SelectItem>
          </SelectContent>
        </Select>
        <Button className="btn-primary">Clear Session</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesData.map((classItem, index) => (
          <ClassCard
            key={index}
            subject={classItem.subject}
            instructor={classItem.instructor}
            description={classItem.description}
            joinedCount={classItem.joinedCount}
            isLive={classItem.isLive}
            timeAgo={classItem.timeAgo}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <CreateSessionForm />
        <HostOrJoinCard />
      </div>
      <LiveSessionCard />
    </div>
  );
}
