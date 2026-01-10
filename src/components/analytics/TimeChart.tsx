"use client";

import { Info, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const data = [
  { date: "Dec 14", "Study Wager": 45, "Live Tutoring": 60, "Smart Notes": 30 },
  { date: "Dec 15", "Study Wager": 52, "Live Tutoring": 55, "Smart Notes": 28 },
  { date: "Dec 16", "Study Wager": 48, "Live Tutoring": 70, "Smart Notes": 35 },
  { date: "Dec 17", "Study Wager": 60, "Live Tutoring": 65, "Smart Notes": 40 },
  { date: "Dec 18", "Study Wager": 55, "Live Tutoring": 75, "Smart Notes": 38 },
  { date: "Dec 19", "Study Wager": 58, "Live Tutoring": 80, "Smart Notes": 42 },
  { date: "Dec 20", "Study Wager": 62, "Live Tutoring": 78, "Smart Notes": 45 },
];

export function TimeChart() {
  return (
    <div className="space-y-3">
      <Card className="w-full shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold ">
            Time Spent per Feature
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="h-80 min-w-[800px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}m`}
                />
                <Tooltip
                  formatter={(value) => [`${value} minutes`, "Time"]}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Study Wager"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Live Tutoring"
                  stroke="#10b981"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Smart Notes"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Alert className=" border-none text-neutral-500 justify-between">
        
        <AlertDescription className="flex items-center justify-center gap-1.5"> 
          <Info />
          Data updates automatically when other pages start/stop a session.
          Close the tab to stop tracking; in-progress sessions count until the
          last heartbeat.
        </AlertDescription>
      </Alert>
    </div>
  );
}
