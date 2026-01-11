import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type TAnalyticsStat = {
  id: number;
  key: string;
  title: string;
  value: number;
  unit: string;
  status: string;
  statusColor: string;
  bgColor: string;
};

interface AnalyticsStatCardProps {
  data: TAnalyticsStat;
}

const AnalyticsStatCard = ({ data }: AnalyticsStatCardProps) => {
  const { statusColor, bgColor, status, value, title } = data;
  return (
    <Card className="w-full  shadow-none gap-0 relative overflow-hidden">
      <div
        className={`pointer-events-none absolute -bottom-16 -right-10 size-32 rounded-full ${bgColor} blur-2xl `}
      />
      <CardHeader className="">
        <CardTitle className="text-sm! uppercase font-normal text-neutral-600">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-neutral-900 text-xl font-bold mb-2">{value} m</p>

        <div className="flex gap-2 items-center text-sm text-neutral-600 ">
          <div
            className={`size-3 rounded-full `}
            style={{ backgroundColor: statusColor }}
          />{" "}
          {status}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsStatCard;
