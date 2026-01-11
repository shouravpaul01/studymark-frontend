import HeaderTitle from "@/components/shared/HeaderTitle";


import {  focusWeaponFeatures, warfareFeatures, } from "@/constants";


import { WarfareFeatureCard } from "@/components/mental-warfare/WarfareFeaturesCard";
import { SessionSteps } from "@/components/mental-warfare/SessionSteps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

export default function page() {
  return (
    <div>
      <div className="container space-y-14 py-20">
        <HeaderTitle
          title="Welcome to Mental Warfare "
          description="Where studying turns into a battle of brains, focus, and willpower.
Challenge your friends, 
hack your brain into full study mode, and make
learning unmissable fun."
          descriptionClassName="max-w-2xl! text-sm"
       
          className="-space-y-2 md:col-span-2"
          centered
        />

        <div className="space-y-8">
          <HeaderTitle
            title="Why Mental Warfare? "
            description="This is more than a feature. It's a game. A competition. A mind sport."
            descriptionClassName="max-w-2xl! text-sm"
         
            className="-space-y-2 md:col-span-2"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {warfareFeatures.map((item) => (
              <WarfareFeatureCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <HeaderTitle
              title="How It Works "
              description="Simple rules, intense focus. With pride, bragging rights, and money on the line — your brain won't dare slack off."
              descriptionClassName="max-w-2xl! text-sm"

              className="-space-y-2 md:col-span-2"
            />
            <SessionSteps />
          </div>
          <Card className="w-full
          shadow-none bg-transparent">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary text-white rounded-xl">
              <Target className="w-8 h-8" />
            </div>
          </div>
          <CardTitle className="text-xl font-bold">Your Focus is Your Weapon</CardTitle>
          <CardDescription className="text-neutral-600 text-lg p">
            Let your competitive side take over
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 ">
          {focusWeaponFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl  ">
              <div className={`p-3 bg-primary/10 text-primary rounded-full`}>
                <feature.icon className={`w-6 h-6 `} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-neutral-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
        
      </Card>
        </div>
      </div>
    </div>
  );
}
