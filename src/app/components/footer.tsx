'use client'

import Image from 'next/image'
import { FaFacebookF, FaPinterestP, FaInstagram, FaPhone, FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[url('/images/spice-bg.jpg')] bg-cover bg-center text-white pt-12 pb-6 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-8">
        {/* About Us */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">About us</h3>
          <p className="text-gray-300">
            Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac,
            consequat velit.
          </p>
          <p className="mt-4 text-yellow-400 font-semibold cursor-pointer">Read More</p>
          <div className="flex gap-4 mt-6 text-xl">
            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">Help</h3>
          <ul className="text-gray-300 space-y-2">
            <li>› Search</li>
            <li>› Help</li>
            <li>› Information</li>
            <li>› Privacy Policy</li>
            <li>› Shipping Details</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">Support</h3>
          <ul className="text-gray-300 space-y-2">
            <li>› Contact us</li>
            <li>› About us</li>
            <li>› Careers</li>
            <li>› Refunds</li>
            <li>› Deliveries</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">Information</h3>
          <ul className="text-gray-300 space-y-2">
            <li>› Search Terms</li>
            <li>› Advanced Search</li>
            <li>› Help & FAQ’s</li>
            <li>› Store Location</li>
            <li>› Orders & Returns</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-bold mb-4">Contact us</h3>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" /> 11244 Niki Lauda 455 New Zealand
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> 0000 - 123 - 456789
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> 9.30AM - 7.30PM
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> mail@example.com
            </li>
          </ul>
        </div>
      </div>

      {/* Payment & Footer Bottom */}
      <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Waffy (password: buddha) Powered by Shopify</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Image width={30} height={20}  src="/images/visa.png" alt="visa" className="h-6" />
          <Image  width={30} height={20} src="/images/mastercard.png" alt="mastercard" className="h-6" />
          <Image  width={30} height={20} src="/images/amex.png" alt="amex" className="h-6" />
          <Image  width={30} height={20} src="/images/paypal.png" alt="paypal" className="h-6" />
          <Image  width={30} height={20} src="/images/discover.png" alt="discover" className="h-6" />
        </div>
      </div>

      <div className="text-sm text-center text-white mt-4">
        Home page &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; <span className="text-yellow-400">Search</span>
      </div>
    </footer>
  )
}
