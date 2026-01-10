import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../Components/news";
import Footer from './Footer'

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

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
          BlogDetails
        </h1>
      </section>

      <section className="py-16 md:px-15">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-xl mb-6"
          />

          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>

          <p className="text-gray-500 mb-6">
            {blog.date} • By {blog.author}
          </p>

          <div className="text-gray-700 leading-8 whitespace-pre-line text-lg">
            {blog.content}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogDetails;
