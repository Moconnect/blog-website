// components/BlogDetails.tsx

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogData from "../data/daten";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogFullPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id, 10);
  const index = blogData.findIndex((blog) => blog.id === blogId);

  if (index === -1) {
    return <div>Blog not found</div>;
  }

  const blog = blogData[index];
  const prevBlog = index > 0 ? blogData[index - 1] : null;
  const nextBlog = index < blogData.length - 1 ? blogData[index + 1] : null;

  return (
    <div>
      <Header />
      <div className="mt-6 flex justify-around">
        <button>
          {prevBlog && (
            <Link
              to={`/blog/${prevBlog.id}`}
              className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            >
              Previous Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          )}
        </button>

        <button>
          {nextBlog && (
            <Link
              to={`/blog/${nextBlog.id}`}
              className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            >
              Next Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          )}
        </button>
      </div>

      <article className="bg-white p-8 mt-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="">
            <img
              src={blog.image}
              alt=""
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h1 className="text-3xl font-bold mt-10">{blog.title}</h1>
            <hr className="my-2 mt-5" />
            <p className="text-gray-500">Erstellt am :{blog.date}</p>
          </div>
        </div>
        <div>
          <p className="mt-5">{blog.desc}</p>
        </div>

        {/* Add the full content or any other details you want to display */}
      </article>
      <Footer />
    </div>
  );
};

export default BlogFullPage;
