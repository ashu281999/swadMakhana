'use client'

import { FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa'

export default function OurTeam() {
  const team = [
    {
      name: 'Ethelyn Hilaire',
      role: 'CEO',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
    },
    {
      name: 'Timmy Bard',
      role: 'Product Manager',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
    },
    {
      name: 'Willie Hagel',
      role: 'Customer support',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
    },
    {
      name: 'Soraya Rolston',
      role: 'Manager',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
    },
  ]

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-[#A04600] font-[cursive] mb-2">Our Team</h2>
      <p className="text-gray-600 text-lg mb-4">
             The People Behind Your Favorite Makhana
      </p>
      <div className="flex justify-center mb-8">
        <span className="text-yellow-500 text-2xl mx-1">★</span>
        <span className="text-black text-2xl mx-1">★</span>
        <span className="text-yellow-500 text-2xl mx-1">★</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white border rounded overflow-hidden">
            {/* Top colored area */}
            <div className="bg-yellow-400 py-6 flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-[#A04600]"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-xl font-bold font-[cursive] text-[#A04600]">{member.name}</h3>
              <p className="text-gray-700 text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-800 text-lg">
                <FaFacebookF className="hover:text-[#A04600] cursor-pointer" />
                <FaTwitter className="hover:text-[#A04600] cursor-pointer" />
                <FaPinterestP className="hover:text-[#A04600] cursor-pointer" />
                <FaYoutube className="hover:text-[#A04600] cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
