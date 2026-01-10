import React from "react";

const testimonials = [
  {
    text: "Making this the first true generator on the internet. It uses a dictionary of over 200 Latin words.",
    name: "Robert Smith",
    role: "CEO, Expresso",
  },
  {
    text: "The best theme is there is anyone who loves or pursues or desires to obtain pain itself.",
    name: "Sohan Reo",
    role: "Director, Growth King",
  },
  {
    text: "We use as filler text for layouts. Non-readability is of great importance.",
    name: "David Deni",
    role: "CO, Artery",
  },
];

 function Testimonial() {
  return (
    <section className="py-16 md:px-15  mb-15 px-5 bg-gradient-to-r from-slate-900 to-blue-900">
       <h1 className="text-center font-bold text-xl text-white pb-5">Testimonial</h1>
      <h2 className="md:text-4xl text-2xl font-bold text-center text-white mb-12">
        What Our Patients Said
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg"
          >
            <p className="text-gray-600 mb-6">{item.text}</p>
            <h4 className="font-semibold text-gray-900">{item.name}</h4>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonial;