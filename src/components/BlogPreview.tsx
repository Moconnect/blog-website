// components/BlogPreview.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPreviewProps {
  blog: {
    id: number;
    title: string;
    date: string;
    desc: string;
    image: string;
  };
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ blog }) => {
  return (
    <div className="shadow-md col-span-1 mb-4  mx-auto bg-gray-100">
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover mb-2" />
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-500 mb-2">Erstellt am : {blog.date}</p>
      <p className="text-gray-700">{blog.desc}</p>
      <hr />
      <Link to={`/blog/${blog.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2  hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default BlogPreview;
