'use client'
import Image from 'next/image'
import { FaUser, FaCalendarAlt, FaComments, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function BlogSection() {
  return (
    <section className="py-20 bg-white text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-[#A04600]  mb-2">Blog Post</h2>
      <p className="text-gray-600 text-lg mb-4">
        Suspendisse potenti nullam ac tortor vitae purus faucibus orn.
      </p>
      <div className="flex justify-center mb-8">
        <span className="text-yellow-500 text-2xl mx-1">★</span>
        <span className="text-black text-2xl mx-1">★</span>
        <span className="text-yellow-500 text-2xl mx-1">★</span>
      </div>

      {/* Blog Card */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Left Arrow */}
        <button className="hidden lg:block w-10 h-10 border border-[#A04600] rounded-full flex items-center justify-center text-[#A04600] hover:bg-[#A04600] hover:text-white transition">
          <FaChevronLeft />
        </button>

        {/* Blog Content */}
        <div className="lg:col-span-1 lg:col-start-2 flex flex-col lg:flex-row items-center gap-6">
          {/* Blog Image */}
          <Image
            src="https://morbiwalasweets.com/cdn/shop/files/3_b888385e-c152-4881-ae91-a99e2ed44e7f.png?v=1690317782"
            alt="Black pepper"
            className="rounded-md w-full lg:w-1/2 object-cover shadow"
          />

          {/* Blog Info */}
          <div className="text-left space-y-2">
            <h3 className="text-2xl font-bold  text-gray-800">Black pepper powder</h3>
            <div className="flex items-center text-sm text-gray-500 gap-4 flex-wrap">
              <span className="flex items-center gap-1"><FaUser className="text-[#A04600]" /> By Ram M</span>
              <span className="flex items-center gap-1"><FaCalendarAlt className="text-[#A04600]" /> November 13, 2018</span>
              <span className="flex items-center gap-1"><FaComments className="text-[#A04600]" /> 6 Comments</span>
            </div>
            <p className="text-sm text-gray-600">
              Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nib...
            </p>
            <button className="border border-[#A04600] text-[#A04600] px-5 py-2 rounded-full hover:bg-[#A04600] hover:text-white transition mt-2">
              Read more
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="hidden lg:block w-10 h-10 border border-[#A04600] rounded-full flex items-center justify-center text-[#A04600] hover:bg-[#A04600] hover:text-white transition">
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}
