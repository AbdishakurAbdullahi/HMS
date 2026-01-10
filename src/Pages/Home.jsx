import React from "react";
import { Link } from "react-router-dom";

// Importing Components
import AppointmentForm from "../Components/AppointmentForm.jsx";
import Services from "../Components/Services.jsx";
import GreatWork from "../Components/GreateWor.jsx";
import Testimonial from "../Components/Testimonial.jsx";
import Footer from "../Components/Footer.jsx";
import Team from "../Components/Team.jsx";
import News from "../Components/News.jsx";

// Importing Assets Or Images
import Hero from "../assets/Hero-img.png";
import Cancer from "../assets/Category-5-cancer.png";
import ChildCare from "../assets/category-4-childcare.png";
import Medicine from "../assets/Category-3-medicine.png";
import Urology from "../assets/Category-6-urology.png";
import Skin from "../assets/Category-1-skin.png";
import Dentist from "../assets/Category-2-dentist.png";
import About from "../assets/about-our-company-1.png";

// Home Page Starts Here

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[rgb(236,246,255)] grid md:grid-cols-2  md:px-15 px-5 md:py-20 pb-10  mb-25 gap-10">
        <div className="">
          <h1 className="text-3xl lg:text-7xl pt-10 pb-5  font-bold text-[rgb(3,29,54)]">
            Protect Your Health And Take Care Your Health
          </h1>
          <p className="mt-3 text-xl text-[rgb(115,114,142)]">
            It is a established fact that a reader will be distracted by the
            content of a page when looking at this layout.
          </p>

          {/* Button Discover More */}
          <button className="px-8 rounded-full py-3 text-white text-lg mt-9 bg-[rgb(69,137,244)]">
            <Link to="/about">Discover More</Link>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-2 justify-center lg:grid-cols-3 gap-5 mt-8 text-[rgb(3,29,54)]">
            <div className="mt-5">
              <h3 className="text-4xl font-bold pb-2 text-[rgb(3,29,54)]">
                355k+
              </h3>
              <p className="text-[rgb(115,114,142)] text-xl">
                Patients Everyday
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-4xl font-bold pb-2 text-[rgb(3,29,54)]">
                98%
              </h3>
              <p className="text-[rgb(115,114,142)] text-xl">Good Review</p>
            </div>
            <div className="mt-5">
              <h3 className="text-4xl font-bold pb-2 text-[rgb(3,29,54)]">
                120+
              </h3>
              <p className="text-[rgb(115,114,142)] text-xl">Popular Doctors</p>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <img className="w-[100%]" src={Hero} alt="" />

       
      </section>

      {/* Categories Section */}
      <section>
        <div className="mb-10 md:px-15  mb-25 px-5">
          <h2 className="md:text-4xl text-2xl font-bold text-[rgb(3,29,54)]">
            Browse By Category
          </h2>
          {/* Categories Cards */}
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 items-center justify-center mt-5">
            {/* Skin */}
             <div className="grid items-center justify-center md:w-[180px] w-[200px]w-[180px] h-[180px] bg-[rgb(236,243,254)] m-5 p-3 rounded-lg text-center">
              <img
                className="p-3 mx-8 w-[70px] rounded-full bg-[rgb(42,194,142)]"
                src={Skin}
                alt=""
              />
              <h3 className="text-2xl font-bold">Skin</h3>
              <p className="text-lg">(20 Doctors)</p>
            </div>

            {/* Medicine */}
             <div className="grid items-center justify-center md:w-[180px] w-[200px]w-[180px] h-[180px] bg-[rgb(236,243,254)] m-5 p-3 rounded-lg text-center">
              <img
                className="p-3 mx-8 w-[70px] rounded-full bg-[rgb(42,194,142)]"
                src={Medicine}
                alt=""
              />
              <h3 className="text-2xl font-bold">Medicine</h3>
              <p className="text-lg">(50 Doctors)</p>
            </div>

            {/* Dentist */}
             <div className="grid items-center justify-center md:w-[180px] w-[200px]w-[180px] h-[180px] bg-[rgb(236,243,254)] m-5 p-3 rounded-lg text-center">
              <img
                className="p-3 mx-8 w-[70px] rounded-full bg-[rgb(42,194,142)]"
                src={Dentist}
                alt=""
              />
              <h3 className="text-2xl font-bold">Dentist</h3>
              <p className="text-lg">(30 Doctors)</p>
            </div>

            {/* Child Care */}
            <div className="grid items-center justify-center md:w-[180px] w-[200px]w-[180px] h-[180px] bg-[rgb(236,243,254)] m-5 p-3 rounded-lg text-center">
              <img
                className="p-3 mx-8 w-[70px] rounded-full bg-[rgb(42,194,142)]"
                src={ChildCare}
                alt=""
              />
              <h3 className="text-2xl font-bold">Child Care</h3>
              <p className="text-lg">(25 Doctors)</p>
            </div>

            {/* Cancer */}
             <div className="grid items-center justify-center md:w-[180px] w-[200px]w-[180px] h-[180px] bg-[rgb(236,243,254)] m-5 p-3 rounded-lg text-center">
              <img
                className="p-3 mx-8 w-[70px] rounded-full bg-[rgb(42,194,142)]"
                src={Cancer}
                alt=""
              />
              <h3 className="text-2xl font-bold">Cancer</h3>
              <p className="text-lg">(15 Doctors)</p>
            </div>
            {/* Urology */}
            <div className="grid items-center justify-center md:w-[180px] w-[200px]w-[180px] h-[180px] bg-[rgb(236,243,254)] m-5 p-3 rounded-lg text-center">
              <img
                className="p-3 mx-8 w-[70px] rounded-full bg-[rgb(42,194,142)]"
                src={Urology}
                alt=""
              />
              <h3 className="text-2xl font-bold">Urology</h3>
              <p className="text-lg">(10 Doctors)</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* About Us Section */}
      <section className="bg-[rgb(239,239,253)] pt-25 pb-1 md:px-15 px-5 mb-25">
        <div className="grid md:grid-cols-2  items-center gap-10 mb-20">
          {/* About Image */}
          <img className="w-[100%]" src={About} alt="" />

          <div>
            <h2 className="font-bold text-2xl pb-2 text-[rgb(69,137,244)]">
              Who We Are
            </h2>
            <h2 className="md:text-5xl text-2xl font-bold text-[rgb(3,29,54)]">
              About Our Company
            </h2>
            <h3 className="font-bold text-4xl pt-2 text-[rgb(69,137,244)]">
              Since 2025
            </h3>
            <p className="mt-5 text-xl text-[rgb(115,114,142)]">
              We use as filler text for layouts, non-readability is of great
              importance but because those who do not know how to pursue
              pleasure rationally encounter consequences that are extremely
              painful. Nor again is there anyone who loves or pursues or desires
              to obtain.
            </p>
            <p className="mt-5 text-xl text-[rgb(115,114,142)]">
              when our power of choice is untrammeled and when nothing prevents
              our being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances
            </p>
            {/* Button Learn More */}
            <button className="px-8 rounded-full py-3 text-white text-lg mt-9 bg-[rgb(69,137,244)]">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Our Service */}
      <Services />

      {/* Our Project */}
      <GreatWork />

      {/* Testimonial */}
      <Testimonial />

      {/* Team */}
      <Team />

      {/* Get In Touch */}

      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url('https://i.pinimg.com/1200x/6e/37/5a/6e375ad883c69fbb6f5845e99ca25623.jpg')
  `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        ,
        {/* <div className="relative inset-0 bg-gradient-to-r from-[#071c2f] via-[#071c2f]/90 to-[#071c2f]/40"></div> */}
        <div className="relative max-w-7xl mx-auto px-6 pt-22 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-black">
            <h3 className="uppercase text-white font-bold mb-4 text-xl">
              Get In Touch
            </h3>
            <h1 className="mb-10 md:text-5xl text-3xl text-white font-bold">
              Best Medical & Health Care Near Your City
            </h1>
            <p className="text-white max-w-lg mb-10 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-5">
              <button className="bg-blue-500 hover:bg-blue-600 text-white md:px-8 px-5 py-4 rounded-lg font-medium">
                <Link to='/appointmentsForm'>Get Appointment</Link>
              </button>
              <button className="border border-emerald-400 text-emerald-400 md:px-8 px-5 py-4 rounded-lg font-medium hover:bg-emerald-400 hover:text-white transition">
                <Link to='/about'>Explore More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <News />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
