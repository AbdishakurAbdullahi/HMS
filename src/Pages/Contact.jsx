import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import Footer from "../Components/Footer";
function Contact() {
  return (
    <>
    {/* Contact Starts Here */}
      <section
        className="h-[400px]"
        style={{
          backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://i.pinimg.com/1200x/93/f9/6c/93f96cc97c8be5bbe4e719810ced4b24.jpg')
  `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl text-white md:px-15 px-5 pt-40 md:text-5xl font-bold">
          Contact Us
        </h1>
      </section>
      <section className="md:px-15">
        {/* ===== HERO SECTION ===== */}

        {/* ===== INFO CARDS ===== */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-6">
          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Office Address"
            text="16/A, Ramadan House City, Tower New York, United States"
            color="bg-red-500"
          />
          <InfoCard
            icon={<FaPhoneAlt />}
            title="Phone Number"
            text="+880 1234 567895\n+880 9876 543217"
            color="bg-blue-500"
          />
          <InfoCard
            icon={<FaEnvelope />}
            title="Email Address"
            text="example@gmail.com\njunayedallinone@gmail.com"
            color="bg-yellow-500"
          />
          <InfoCard
            icon={<FaGlobe />}
            title="Website Address"
            text="www.example.com"
            color="bg-green-500"
          />
        </section>

        {/* ===== CONTACT FORM ===== */}
        <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://html.narzotech.com/madifax/images/contact_img.jpg"
            alt="team"
            className="rounded-xl w-full h-[500px]"
          />

          <form className="bg-white h-[500px] rounded-xl shadow-lg p-8 grid md:grid-cols-2  gap-4">
            <input
              className="border-1 outline-0 md:w-60 w-30 h-10 rounded-full pl-2"
              placeholder="Full Name"
            />
            <input
              className="border-1 outline-0 md:w-60 h-10 rounded-full pl-2"
              placeholder="Email Address"
            />
            <input
              className="border-1 outline-0 md:w-60 h-10 rounded-full pl-2"
              placeholder="Phone Number"
            />
            <input
              className="border-1 outline-0 md:w-60 h-10 rounded-full pl-2"
              placeholder="Subject"
            />
            <input
              className="border-1 outline-0 md:w-124 h-10 rounded-full pl-2"
              placeholder="Service"
            />
            <textarea
              className="input col-span-2 h-20 border-1 py-5 px-2 outline-0"
              placeholder="Message"
            ></textarea>

            <button className="col-span-2 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
              Submit Now
            </button>
          </form>
        </section>

        {/* ===== GOOGLE MAP ===== */}
        <iframe
          className="h-[450px]"
          title="google-map"
          src="https://www.google.com/maps?q=Mogadishu&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}

/* ===== INFO CARD ===== */
const InfoCard = ({ icon, title, text, color }) => (
  <div className="text-center bg-white shadow rounded-xl p-6">
    <div
      className={`w-14 h-14 ${color} text-white rounded-full flex items-center justify-center mx-auto text-xl mb-4`}
    >
      {icon}
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 text-sm whitespace-pre-line">{text}</p>
  </div>
);

export default Contact;
