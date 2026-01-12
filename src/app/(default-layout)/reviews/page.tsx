import FeedbackForm from '@/components/reviews/FeedbackForm'
import ReviewCard from '@/components/reviews/ReviewCard'
import HeaderTitle from '@/components/shared/HeaderTitle'
import { reviewsData } from '@/constants'
import React from 'react'

export default function page() {
  return (
  <div className="container space-y-14 py-20">
      <HeaderTitle
        title="What Students Say"
       
        centered
      />
      <div className='border p-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5 '>
        {
            reviewsData.map((review,index)=> <ReviewCard key={index} data={review} />)
        }
      </div>
      <FeedbackForm />
    </div>
  )
}
