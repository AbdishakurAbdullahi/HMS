import { Link } from "react-router-dom";
import blogs from "../Components/news";

const News = () => {
  return (
    <section className="py-16 md:px-15 px-5  mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase">
            Latest News
          </p>
          <h2 className="md:text-4xl text-2xl font-bold mt-2">
            Our Latest Blog Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">
                  {blog.date}
                </p>

                <h3 className="font-bold text-xl mb-4 leading-snug">
                  {blog.title}
                </h3>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
