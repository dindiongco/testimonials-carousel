import iconNext from './assets/iconNext.svg'
import iconPrev from './assets/iconPrev.svg'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import TestimonialItem from './TestimonialItem';


const testimonials = [
  {
    "id": 1,
    "name": "Tanya Sinclair",
    "description": "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    "imgURL": "../src/assets/book.jpg"
  },
  {
    "id": 2,
    "name": "John Baggy",
    "description": "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    "imgURL": "../src/assets/imageJohn.jpg"
  }
]

const Testimonials = () => {

  return (
    <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            {testimonials.map((testimonial) => {
            return (
            <SwiperSlide key={testimonial.id}>
                <TestimonialItem 
                  name={testimonial.name}
                  description={testimonial.description}
                  imgURL={testimonial.imgURL}
                />
            </SwiperSlide>
            )
            })}

            <div className="carousel-buttons">
                <button className="left swiper-button-prev"><img src={iconPrev} alt="" /></button>
                <button className="right swiper-button-next"><img src={iconNext} alt="" /></button>
            </div>
          
        </Swiper>
  );
};

export default Testimonials;