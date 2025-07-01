
import React from 'react'
import { FaUndo, FaShippingFast, FaHeadset } from 'react-icons/fa'
export default function Policy() {
 const features = [
    {
      icon: <FaUndo />,
      title: 'Money Back Guarantee',
      description:
        'Consecteur adipisicing elitesd do eiusmod tempor incididunt ulabore et dolore ulabore et dolore dolor sit amet.',
    },
    {
      icon: <FaShippingFast />,
      title: 'Free Shipping',
      description:
        'Sit amet dolor consectetur adipisicing elitesd do eiusmod tempor incididunt ulabore et dolore ulabore et dolore.',
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Customer Service',
      description:
        'Dolor sit amet consectetur adipisicing elitesd do eiusmod tempor incididunt ulabore et dolore ulabore et dolore.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative bg-white border rounded-xl px-6 pt-12 pb-6 shadow-md text-center max-w-xs mx-auto"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#A04600] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-[#A04600] font-bold text-lg mt-2 mb-2 font-[cursive]">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
     
    )
}