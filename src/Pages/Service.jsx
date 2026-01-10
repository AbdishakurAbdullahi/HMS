import {
  FaHeartbeat,
  FaMicroscope,
  FaXRay,
  FaUserMd,
  FaAmbulance,
  FaStethoscope,
  FaHospital,
  FaNotesMedical,
  FaSyringe,
} from "react-icons/fa";
import Footer from "../Components/Footer";

function Services() {
  const services = [
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
    {
      id: 4,
      title: "Qualified Doctors",
      desc: "Experienced and certified medical professionals.",
      icon: <FaUserMd />,
      image:
        "https://i.pinimg.com/736x/8a/5c/52/8a5c525d87882cd55582a204f9231368.jpg",
    },
    {
      id: 5,
      title: "Emergency Care",
      desc: "24/7 emergency ambulance and hospital care.",
      icon: <FaAmbulance />,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },
    {
      id: 6,
      title: "General Checkup",
      desc: "Regular health checkups for all age groups.",
      icon: <FaStethoscope />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    },
    {
      id: 7,
      title: "Online Monitaring",
      desc: "State-of-the-art hospital facilities and rooms.",
      icon: <FaHospital />,
      image: "https://html.narzotech.com/madifax/images/service-1.jpg",
    },
    {
      id: 8,
      title: "Medical Reports",
      desc: "Digital and printed medical report services.",
      icon: <FaNotesMedical />,
      image: "https://html.narzotech.com/madifax/images/service-8.jpg",
    },
    {
      id: 9,
      title: "Vaccination",
      desc: "Safe and reliable vaccination services.",
      icon: <FaSyringe />,
      image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34",
    },
  ];

  return (
    <>
      <section
        className="h-[400px]"
        style={{
          backgroundImage: `
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('https://i.pinimg.com/736x/b3/e3/34/b3e334466c2093160b38ad5d1c44c732.jpg')
  `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl text-white md:px-15 px-5 pt-40 md:text-5xl font-bold">
          Our Services
        </h1>
      </section>

      <section className="py-30 px-15 bg-gray-50">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-4 rounded-xl text-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
