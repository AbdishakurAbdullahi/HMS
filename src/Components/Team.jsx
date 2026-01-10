import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto py-20 md:px-15 px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          <span className="text-blue-500 font-medium">Our Team</span>
        </div>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-16">
          Meet Our Team Member
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white rounded-t-full shadow-lg overflow-hidden">
            <div className="bg-blue-100 rounded-t-full h-72 ">
              <img src='https://html.narzotech.com/madifax/images/team-one.png'  />
            </div>
            <div className="flex justify-center -mt-6">
              <div className="bg-emerald-500 px-6 py-3 rounded-full flex gap-4 text-white">
                <FaInstagram />
                <FaTwitter />
                <FaSnapchatSquare />
                <FaFacebook />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Dr. Jon Miller
              </h3>
              <p className="text-blue-600 mt-1">Cancer Special</p>
            </div>
          </div>

          <div className="bg-white rounded-t-full shadow-lg overflow-hidden">
            <div className="bg-blue-100 rounded-t-full h-72 flex item-end justify-center">
              <img src='https://html.narzotech.com/madifax/images/team-two.png' alt="" />
            </div>
            <div className="flex justify-center -mt-6">
              <div className="bg-emerald-500 px-6 py-3 rounded-full flex gap-4 text-white">
                <FaInstagram />
                <FaTwitter />
                <FaSnapchatSquare />
                <FaFacebook />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Dr. Jon Miller
              </h3>
              <p className="text-blue-600 mt-1">Cancer Special</p>
            </div>
          </div>

          <div className="bg-white rounded-t-full shadow-lg overflow-hidden">
            <div className="bg-blue-100 rounded-t-full h-72 flex items-end justify-center">
              <img src='https://html.narzotech.com/madifax/images/team-three.png' className="h-64" />
            </div>

            <div className="flex justify-center -mt-6">
              <div className="bg-emerald-500 px-6 py-3 rounded-full flex gap-4 text-white">
                <FaInstagram />
                <FaTwitter />
                <FaSnapchatSquare />
                <FaFacebook />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Dr. Sohan Deo</h3>
              <p className="text-blue-600 mt-1">Dentist Speacial</p>
            </div>
          </div>

          <div className="bg-white rounded-t-full shadow-lg overflow-hidden">
            <div className="bg-blue-100 rounded-t-full h-72 flex items-end justify-center">
              <img src='https://html.narzotech.com/madifax/images/team-four.png' className="h-64" />
            </div>

            <div className="flex justify-center -mt-6">
              <div className="bg-emerald-500 px-6 py-3 rounded-full flex gap-4 text-white">
                <FaInstagram />
                <FaTwitter />
                <FaSnapchatSquare />
                <FaFacebook />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Dr. Sabrina Khan</h3>
              <p className="text-blue-600 mt-1">Skin Special</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;