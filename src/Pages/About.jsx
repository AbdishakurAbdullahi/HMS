import React from "react";
import Footer from "../Components/Footer.jsx";
import Team from "../Components/Team.jsx";
import News from "../Components/News.jsx";
// import AboutImage from "../assets/about-img1.jpg";
// import AboutImage2 from "../assets/about_img2.jpg";

function About() {
  return (
    <>
      {/* About Us Starts Here*/}
      <section
        className="h-[400px]"
        style={{
          backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url('https://i.pinimg.com/1200x/ea/ef/ba/eaefba0eef55eaa8e6e71c6bf25eef1a.jpg')
  `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl text-white md:px-15 px-5 pt-40 md:text-5xl font-bold">
          About Us
        </h1>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img
              src="https://html.narzotech.com/madifax/images/about-img1.jpg"
              class="rounded-xl w-full"
              alt="surgery"
            />

            <div class="absolute -bottom-10 left-10 bg-white rounded-xl shadow-lg p-2">
              <div class="relative">
                <img
                  src="https://html.narzotech.com/madifax/images/about_img2.jpg"
                  class="rounded-lg w-64"
                  alt="doctor"
                />
              </div>
            </div>
          </div>

          <div>
            <span class="text-blue-500 font-semibold flex items-center gap-2 mb-3">
              <span class="w-6 h-[2px] bg-blue-500"></span> About Us
            </span>

            <h2 class="text-4xl font-bold text-gray-900 leading-snug mb-6">
              The Great Place Of Medical Hospital Center.
            </h2>

            <p class="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-10">
              <div class="flex items-center gap-3">
                <span class="text-blue-500 text-xl">✔</span>
                <p>Ambulance Services</p>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-blue-500 text-xl">✔</span>
                <p>Oxizen On Wheel</p>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-blue-500 text-xl">✔</span>
                <p>Pharmacy On Clinic</p>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-blue-500 text-xl">✔</span>
                <p>On Duty Doctors</p>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-blue-500 text-xl">✔</span>
                <p>24/7 Medical Emergency</p>
              </div>
            </div>

            <button class="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition">
              Discover More
            </button>
          </div>
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-6 py-16">
        <div
          class="grid grid-cols-1 md:grid-cols-4 rounded-2xl p-10 text-center
        bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 shadow-sm"
        >
          <div class="relative">
            <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white">
              👥
            </div>
            <h2 class="text-4xl font-bold text-gray-900">950+</h2>
            <p class="text-gray-600 mt-1">Happy Patients</p>

            <span class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gray-300"></span>
          </div>

          <div class="relative mt-10 md:mt-0">
            <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white">
              👨‍⚕️
            </div>
            <h2 class="text-4xl font-bold text-gray-900">256+</h2>
            <p class="text-gray-600 mt-1">Expert Doctors</p>

            <span class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gray-300"></span>
          </div>

          <div class="relative mt-10 md:mt-0">
            <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-pink-500 text-white">
              🏆
            </div>
            <h2 class="text-4xl font-bold text-gray-900">90+</h2>
            <p class="text-gray-600 mt-1">Award Wining</p>

            <span class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gray-300"></span>
          </div>

          <div class="mt-10 md:mt-0">
            <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-white">
              ⭐
            </div>
            <h2 class="text-4xl font-bold text-gray-900">4.9</h2>
            <p class="text-gray-600 mt-1">Average Rating</p>
          </div>
        </div>
      </section>

      <Team />
      <section className="relative px-15  md:h-[500px] h-[1150px] bg-gradient-to-r from-cyan-100 via-emerald-50 to-yellow-100 py-20 px-8">
        <div>
          <p class="text-sky-500 text-lg text-center uppercase font-bold mb-2">
            How We Work
          </p>
          <h2 class="text-4xl text-gray-900 font-bold text-center pb-13">
            Our Working Process
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div class="absolute top-8 left-0 right-0 h-px hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="flex flex-col items-center text-center">
              <div className="bg-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10 shadow-lg">
                <span className="text-xl font-semibold">01</span>
              </div>
              <h3 class="text-gray-900 mb-2 font-semibold text-lg">
                Fill The Form
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur ipsum adipiscing elit.
                Rem qua officia quaerat ipsam!
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div class="bg-sky-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10 shadow-lg">
                <span class="text-xl font-semibold">02</span>
              </div>
              <h3 class="text-gray-900 mb-2 font-semibold text-lg">
                Book An Appointment
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur ipsum adipiscing elit.
                Rem qua officia quaerat ipsam!
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div class="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10 shadow-lg">
                <span class="text-xl font-semibold">03</span>
              </div>
              <h3 class="text-gray-900 mb-2 font-semibold text-lg">
                Check-Ups
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur ipsum adipiscing elit.
                Rem qua officia quaerat ipsam!
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div class="bg-amber-400 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10 shadow-lg">
                <span class="text-xl font-semibold">04</span>
              </div>
              <h3 class="text-gray-900 mb-2 font-semibold text-lg">
                Get Reports
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur ipsum adipiscing elit.
                Rem qua officia quaerat ipsam!
              </p>
            </div>
          </div>
        </div>

        <div className="fixed right-6 bottom-1/2 transform translate-y-1/2">
          <div className="bg-sky-500 rounded-full p-2 shadow-lg cursor-pointer hover:bg-sky-600 transition-colors">
            <div className="flex flex-col gap-1"></div>
          </div>
        </div>
      </section>
      <News />
      <Footer />
    </>
  );
}

export default About;
