import React from "react";
import { Link } from "react-router-dom";

const GreatWork = () => {
  return (
    <section className="py-16 bg-white md:px-15 px-5 mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center pb-5 font-bold text-xl text-[rgb(101,157,246)]">Our Project</h1>
        {/* Title */}
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-12">
          Great Work We Have Done
        </h2>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src='https://html.narzotech.com/madifax/images/project-one.jpg'
              alt="Medical Laboratory"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Image 2 with overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src='https://html.narzotech.com/madifax/images/project-tow.jpg'
              alt="Operation Theater"
              className="w-full h-80 object-cover"
            />

            {/* Info Box */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow w-[230px]">
              <h3 className="font-bold text-base">
                Scientist Medical Laboratory
              </h3>
              <p className="text-sm text-gray-500">
                Operation Theater
              </p>
            </div>

            {/* Plus Icon */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold cursor-pointer">
              +
            </div>
          </div>

          {/* Image 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src='https://html.narzotech.com/madifax/images/project-three.jpg'
              alt="Child Care"
              className="w-full h-80 object-cover"
            />
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          {/* Great Work We Have Done */}
        </h2>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src='https://html.narzotech.com/madifax/images/project-four.jpg'
              alt="Medical Laboratory"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Image 2 with overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src='https://html.narzotech.com/madifax/images/project-five.jpg'
              alt="Operation Theater"
              className="w-full h-80 object-cover"
            />

            {/* Info Box */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow w-[230px]">
              <h3 className="font-bold text-base">
                Scientist Medical Laboratory
              </h3>
              <p className="text-sm text-gray-500">
                Operation Theater
              </p>
            </div>

            {/* Plus Icon */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold cursor-pointer">
              +
            </div>
          </div>

          {/* Image 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img
              src='https://html.narzotech.com/madifax/images/project-six.jpg'
              alt="Child Care"
              className="w-full h-80 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreatWork;