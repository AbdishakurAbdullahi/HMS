import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Logo from '../assets/Logo_2.png'

function Footer() {
  return (
    <footer className="bg-[#02162b] md:px-15 px-5 pt-16 pb-6 text-white mt-10">
      <div className="grid md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 bg-blue-500 rounded text-center text-xl">+</div>
            MadiFax
          </div>

          <p className="text-sm text-gray-400 mt-4">
            There are to popular belie Lorem is ipsum is not simply random.
          </p>

          <p className="mt-4 text-sm">
            Hello to :
            <span className="text-blue-400 ml-1">Xaariscade@gmail.com</span>
          </p>

          <div className="flex gap-4 mt-4 text-gray-300">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaSnapchatGhost />
            </span>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Service</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <h3 className="font-semibold mb-4">Important</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Our Process</li>
            <li>Appointment</li>
            <li>Faq</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Why Choose Us</li>
            <li>Pricing Plan</li>
            <li>News & Articles</li>
            <li>Login</li>
            <li>Subscribe</li>
          </ul>
        </div>

        {/* Official Info */}
        <div>
          <h3 className="font-semibold mb-4">Official Info</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>📍 2767 Sunrise Street, NY 1002, USA</li>
            <li>✉ Xaariscade@gmail.com</li>
            <li>📞 +6141676665</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2026 MadiFax. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span>Terms and conditions</span>
          <span>Cookies</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;