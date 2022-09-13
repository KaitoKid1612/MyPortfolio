import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data = [
  {
    avatar: AVTR1,
    name: 'Trong Nghia',
    review: 'I am currently a 4th year student at Vietnam Korea University of Information and Communication Technology. My major is Information Technology. With the knowledge and practical skills learned in school as well as my future career desire to become a PHP programmer, I am very interested in this position of the company. Through this, I can improve my working experience in the industry and can be more solid in my career development path.',
  },
  {
    avatar: AVTR2,
    name: 'Trong Nghia',
    review: 'I am currently a 4th year student at Vietnam Korea University of Information and Communication Technology. My major is Information Technology. With the knowledge and practical skills learned in school as well as my future career desire to become a PHP programmer, I am very interested in this position of the company. Through this, I can improve my working experience in the industry and can be more solid in my career development path.',
  },
  {
    avatar: AVTR3,
    name: 'Trong Nghia',
    review: 'I am currently a 4th year student at Vietnam Korea University of Information and Communication Technology. My major is Information Technology. With the knowledge and practical skills learned in school as well as my future career desire to become a PHP programmer, I am very interested in this position of the company. Through this, I can improve my working experience in the industry and can be more solid in my career development path.',
  },
  {
    avatar: AVTR4,
    name: 'Trong Nghia',
    review: 'I am currently a 4th year student at Vietnam Korea University of Information and Communication Technology. My major is Information Technology. With the knowledge and practical skills learned in school as well as my future career desire to become a PHP programmer, I am very interested in this position of the company. Through this, I can improve my working experience in the industry and can be more solid in my career development path.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials