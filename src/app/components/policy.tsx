
import React from 'react'
import { FaUndo, FaShippingFast, FaHeadset } from 'react-icons/fa'
export default function Policy() {
 const features = [
  {
    icon: <FaUndo />,
    title: 'Money Back Guarantee',
    description:
      "Shop with confidence! If you're not satisfied with your purchase, we offer a full refund within 7 days—no questions asked.",
  },
  {
    icon: <FaShippingFast />,
    title: 'Free Shipping',
    description:
      'Enjoy fast and free delivery on all orders—no minimum purchase required. Get your items delivered right to your doorstep.',
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Customer Service',
    description:
      'Need help? Our dedicated support team is available 24/7 to assist you with any questions, issues, or concerns you may have.',
  },
];


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
            <h3 className="text-[#A04600] font-bold text-lg mt-2 mb-2 ">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
     
    )
}