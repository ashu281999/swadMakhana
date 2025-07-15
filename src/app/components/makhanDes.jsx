import Image from 'next/image';

export default function MakhanaFeature() {
  return (
    <section className=" ps-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-200">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#b95000] mb-4">
        The Finest Phool Makhana 
        </h2>
        <p className="text-gray-700 mb-6">
        Known for its exceptional quality and health benefits, Phool Makhana is a traditional superfood grown in the Mithilanchal region of Bihar. 
        At Swad E-Makhana, we bring you handpicked, naturally processed makhana that's rich in protein, low in fat, and completely gluten-free. 
        Whether you're snacking, fasting, or gifting, our makhana delivers both taste and nutrition in every bite.
        </p>
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
        Light, crunchy, and packed with wellness — our Phool Makhana is an age-old treasure refined for the modern lifestyle. 
        It’s the perfect guilt-free snack, roasted to perfection without any preservatives or additives. 
        Taste the purity, experience the tradition.
        </blockquote>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={"/images/packet.jpeg" }
          alt="Rich Masala"
          className="rounded-lg shadow-lg object-cover"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
}
