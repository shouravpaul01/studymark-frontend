import HeaderTitle from "@/components/shared/HeaderTitle";

import { Alert, AlertDescription,  } from "@/components/ui/alert";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { analyticsStatData } from "@/constants";

import { Badge } from "@/components/ui/badge";

import AnalyticsStatCard from "@/components/analytics/AnalyticsStatCard";
import { TimeChart } from "@/components/analytics/TimeChart";

export default function page() {
  return (
    <div className="container space-y-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <HeaderTitle
          title="Progress Analytics"
          description="Track your study time across Study Wager, Live Tutoring, and Smart
 Notes. Updated in real time when PRO is active."
          descriptionClassName="max-w-full!"
    
          className="-space-y-3 md:col-span-2"
        />
        <div className="flex gap-2.5 justify-end md:justify-end">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">This Week</SelectItem>
              <SelectItem value="physics">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Badge
            variant={"outline"}
            className="text-primary bg-primary/5 shadow-none border-none rounded-lg"
          >
            <div className="size-3 bg-primary rounded-full me-3" /> Live
          </Badge>
        </div>
      </div>
      <Alert
        variant="default"
        className="flex items-center bg-primary/5 border border-primary/20"
      >
        <p className="text-neutral-800 font-medium"> PRO required:</p>

        <AlertDescription className="ms-1 flex flex-wrap items-center">
          Time tracking is paused. Activate PRO to unlock live analytics.{" "}
          <Button size={"sm"} className="btn-primary ms-2.5">
            Activate PRO (Demo)
          </Button>
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {analyticsStatData?.map((stat) => (
          <AnalyticsStatCard key={stat.id} data={stat} />
        ))}
      </div>
      <TimeChart />
    </div>
  );
}
