import PowerfulFeaturesCard from "@/components/about/PowerfulFeaturesCard";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { aboutFeatures, chooseData, provideFeatures } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="container space-y-16 py-28">
      <HeaderTitle
        title="About StudyStakes "
        description="A modern platform designed to help students unlock their true
academic potential. With Al-powered tools, live tutoring, and detailed
progress analytics, we provide a personalized and engaging study
experience."
        descriptionClassName="max-w-lg! text-sm"
        className="-space-y-2 md:col-span-2"
        centered
      />
      <div className="space-y-6">
        <HeaderTitle
          title="Powerful Features"
          description="Everything you need to excel in your studies, all in one place.."
          descriptionClassName="max-w-lg! text-sm"
          className="-space-y-2 md:col-span-2"
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutFeatures.map((item, index) => (
            <PowerfulFeaturesCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden bg-white shadow rounded-xl py-16">
        {/* Top Right Blur Circle */}
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />

        {/* Bottom Left Blur Circle */}
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

        <HeaderTitle
          title="Our Mission"
          description="At StudyStakes, our mission is to make studying not only effective but also engaging. We aim to bridge the gap between traditional learning and modern technology, empowering students to achieve excellence at every stage of their journey."
          descriptionClassName="max-w-lg! text-sm"
          className="-space-y-2 md:col-span-2 relative z-10"
          centered
        />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 pt-10">
        <div className="space-y-8">
          <HeaderTitle
            title="Why Choose StudyStakes? "
            description="Join thousands of learners who have transformed their study routine into a powerful, focused journey toward success."
            descriptionClassName="max-w-2xl! text-sm"
            className="-space-y-2 md:col-span-2"
          />
          <ul className="space-y-4">
            {chooseData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-neutral-500"
              >
                <Check className=" bg-primary/10 text-primary rounded-full p-1 " />{" "}
                {item.label}
              </li>
            ))}
          </ul>
          <Button className="group" >
            Start Learning Today <ArrowRight className="group-hover:translate-x-2 duration-300"/>
          </Button>
        </div>
        <Card
          className="w-full
          shadow-none bg-primary/10 border-none flex items-center justify-center p-10 md:p-0 "
        >
          <CardContent className="space-y-6 pb-0">
            <div className="max-w-[300px] grid grid-cols-2 gap-3">
              {provideFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-1 p-4 bg-white rounded-xl  "
                >
                  <h3 className="font-bold text-lg text-primary">
                    {feature.value}
                  </h3>
                  <p className="text-neutral-500 text-sm">{feature.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
