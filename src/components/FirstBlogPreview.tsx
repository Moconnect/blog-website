// components/FirstBlogPreview.tsx
// i did this in order to acheive the layout design

import React from "react";
import { Link } from "react-router-dom";

interface FirstBlogPreviewProps {
  blog: {
    id: number;
    title: string;
    date: string;
    desc: string;
    image: string;
  };
}

const FirstBlogPreview: React.FC<FirstBlogPreviewProps> = ({ blog }) => {
  return (
    <div className="px-2 py-10 mx-auto ">
      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center bg-gray-100">
        <div>
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96"
          />
        </div>

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <h2 className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
            {blog.title}
          </h2>
          <p className="text-gray-500 mb-2">{blog.date}</p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            {blog.desc}
          </p>
          <hr />
          <Link to={`/blog/${blog.id}`}>
            <button className="mt-2 bg-blue-400 text-black px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstBlogPreview;
