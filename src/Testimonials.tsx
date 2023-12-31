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
    "title": "UX Engineer",
    "description": '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "',
    "imgURL": "../src/assets/imageTanya.jpg"
  },
  {
    "id": 2,
    "name": "John Tarkpoor",
    "title": "Junior Front-end Developer",
    "description": '" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
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
          className='relative | md:container-lg md:mx-auto pt-24 overflow-y-visible'
        >
            {testimonials.map((testimonial) => {
            return (
            <SwiperSlide key={testimonial.id}>
                <TestimonialItem 
                  name={testimonial.name}
                  title={testimonial.title}
                  description={testimonial.description}
                  imgURL={testimonial.imgURL}
                />
                
            </SwiperSlide>
            )
            })}

            
            <div className="carousel-buttons | absolute sm:top-[92.5%] sm:right-48 z-10 top-[42.5%] right-[40%] ">
              <div className="carousel-pill | flex justify-center gap-5 rounded-[100vw] border shadow-xl w-16 py-3 bg-white">
                <button className="left swiper-button-prev"><img src={iconPrev} alt="" /></button>
                <button className="right swiper-button-next"><img src={iconNext} alt="" /></button>
              </div>
            </div>
        </Swiper>
  );
};

export default Testimonials;