import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

let module = require('./review')
let reviews = module.reviews

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container review-container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
{
  reviews.map(review =>{
    return(
      <SwiperSlide  key={review.id}className="review">
          <div className="review-img">
            <img src={review.img} alt="" />
          </div>
          <h3 className="review-name">
            {review.name}
          </h3>
          <small className="review-comment">{review.comment}</small>
        </SwiperSlide>
    )
  })
}
      </Swiper>
    </section>
  )
}

export default Testimonials