import { FaHeartbeat, FaMicroscope, FaXRay } from "react-icons/fa";

function Services() {
  const Services = [
    {
      id: 1,
      title: "Holter Heart Surgery",
      desc: "Advanced heart surgery with modern monitoring technology.",
      icon: <FaHeartbeat />,
      image:
        "https://html.narzotech.com/madifax/images/our-medical-service-item-three.jpg",
    },
    {
      id: 2,
      title: "Diagnose & Research",
      desc: "Accurate diagnosis and deep medical research services.",
      icon: <FaMicroscope />,
      image:
        "https://html.narzotech.com/madifax/images/our-medical-service-item-four.jpg",
    },
    {
      id: 3,
      title: "X-Ray Imaging",
      desc: "High-quality X-ray imaging for precise results.",
      icon: <FaXRay />,
      image:
        "https://html.narzotech.com/madifax/images/our-medical-service-item-one.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 md:px-15 px-5 mb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">Our Service</p>
          <h2 className="md:text-4xl text-2xl font-bold mt-2">Our Medical Service</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Services.map((Service) => (
            <div
              key={Service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={Service.image}
                  alt={Service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-xl text-xl">
                  {Service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {Service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {Service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
