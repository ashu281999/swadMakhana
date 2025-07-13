'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {

    image: '/images/phool-makhana-2.jpeg',
    heading: 'Pure & Crunchy Makhana',
    subheading: 'Get 20% OFF on Your First Order!',
    coupon: 'MAKHANA20',
  },
  {
    image: '/images/makhana.jpg',
    heading: 'Healthy Snacking Starts Here',
    subheading: 'Roasted Makhana - Guilt-Free & Delicious',
    coupon: 'SNACKSMART',
  },
  {
    image: '/images/phool-makhana-3.jpeg',
    heading: 'Farm Fresh. Nutrient Rich.',
    subheading: 'Premium Fox Nuts From Bihar’s Finest',
    coupon: 'FRESH10',
  },
];

export default function SpicesSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        navigation
        autoplay={{ delay: 4000 }}
        // loop={true}
        modules={[Navigation]}
        className="w-full h-[85vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
             
              <div className="absolute inset-0 bg-opacity-60 z-10"></div>

              <div className="text-center text-white z-20 px-6 max-w-3xl">
                <h1 className="text-5xl sm:text-6xl text-amber-800 font-extrabold font-[cursive] mb-4">
                  {slide.heading}
                </h1>
                <h2 className="text-3xl text-yellow-400 font-bold mb-2">
                  {slide.subheading}
                </h2>
                <p className="text-lg">
                  USE COUPON : <span className="font-bold">{slide.coupon}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
