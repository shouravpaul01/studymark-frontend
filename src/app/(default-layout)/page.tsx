import { Banner } from '@/components/home/Banner'
import { FocusCTACard } from '@/components/home/FocusCTACard'
import LearnMoreFeatureCard from '@/components/home/LearnMoreFeatureCard'
import { PricingPlanCard } from '@/components/home/PricingPlanCard'
import { ReviewCard } from '@/components/home/ReviewCard'
import HeaderTitle from '@/components/shared/HeaderTitle'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { learnMoreFeturesData, pricingPlans, reviewsBGColor, reviewsData } from '@/constants'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='space-y-28'>
      <Banner/>
    
       <div className="container space-y-10">
        <HeaderTitle
          title="Everything you need to crush your goals"
          description="Quick, easy, and a bit addictive in the best way possible! Once you start, you might 
find it hard to stop enjoying it!"
          centered
        />
        <div className="max-w-[1130px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {learnMoreFeturesData?.map((feature, index) => (
              <LearnMoreFeatureCard
                key={index}
                icon={feature.icon as any}
                iconWrapperClassName={`${feature.iconBgColor}`}
                iconClassName={feature.iconColor}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                linkClassName={feature.learnMoreColor}
              />
            ))}
          </div>
        </div>
      </div>
       <div className="bg-[#FAFAFA] py-14">
        <div className="container space-y-10">
          <HeaderTitle
            title="What students say"
            description="Real voices, real results."
            centered
          />

          <div className="relative">
            <Carousel opts={{ align: "start" }} className="w-full ">
              <CarouselContent className="pt-18 gap-6">
                {reviewsData.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ReviewCard
                      data={testimonial}
                      bgColor={
                        reviewsBGColor[
                          index % reviewsBGColor.length
                        ]
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-20 flex items-center justify-center gap-4">
                <CarouselPrevious className="static size-14" />
                <CarouselNext  className="static size-14 " />
              </div>
            </Carousel>
            <div className="flex justify-center">
              <Button  className="btn-secondary px-7" asChild><Link href={"/reviews"}>View All Feedback</Link></Button>
            </div>
          </div>
        </div>
      </div>
       <div className="container">
        <div className="mx-auto max-w-6xl space-y-20">
          <HeaderTitle
            title="Simple plans that grow with you"
            description="Pay as you grow. Cancel anytime."
            centered
          />
          <div className="grid gap-16 md:grid-cols-3">
            {pricingPlans?.map((plan) => (
              <PricingPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
      <div className="container pb-28">
        <FocusCTACard />
      </div>
     </div>

  )
}
