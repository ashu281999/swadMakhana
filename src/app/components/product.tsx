import Image from "next/image"

export default function Product() {
  const products = [
    {
      title: 'Classic Roasted Makhana',
      image: 'https://aquaherbals.in/cdn/shop/files/Bihari_Makhana.png?v=1748138889&width=1445',
      description:
        'Lightly roasted with a pinch of Himalayan salt — the perfect healthy snack for any time of day.',
    },
    {
      title: 'Peri Peri Makhana',
      image: 'https://d4pmlgzenkweq.cloudfront.net/tq2qxlsz0m3clnj5w4c5wridkk8r',
      description:
        'A fiery twist on your favorite snack — spiced with a tangy peri peri blend that packs a punch.',
    },
    {
      title: 'Mint Pudina Makhana',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8M1RLzWok8c5NzUjqI6DUzklZmH2VkOFhg&s',
      description:
        'Cool, refreshing mint and pudina flavors combine for a crisp and zesty crunch in every bite.',
    },
    {
      title: 'Cream & Onion Makhana',
      image: 'https://morbiwalasweets.com/cdn/shop/files/3_b888385e-c152-4881-ae91-a99e2ed44e7f.png?v=1690317782',
      description:
        'Rich creaminess balanced with onion zest — a favorite for those who crave indulgence and crunch.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-[#A04600] font-[cursive] mb-2">
        Premium Makhana Collection
      </h2>
      <p className="text-gray-600 text-lg mb-4">
        Handpicked, sun-dried, and roasted to perfection — enjoy guilt-free snacking that’s high in protein and low in calories.
      </p>
      <div className="flex justify-center mb-8">
        <span className="text-yellow-500 text-2xl mx-1">★</span>
        <span className="text-yellow-500 text-2xl mx-1">★</span>
        <span className="text-yellow-500 text-2xl mx-1">★</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="rounded-md w-full h-48 object-cover mb-4"
              unoptimized
            />
            <h3 className="text-xl font-bold font-[cursive] mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <button className="border border-[#A04600] text-[#A04600] px-5 py-2 rounded-full hover:bg-[#A04600] hover:text-white transition">
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
