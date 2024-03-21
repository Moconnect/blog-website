

import React from 'react';
import { Link } from 'react-router-dom';
import BlogPreview from '../components/BlogPreview';
import blogData from '../data/daten';
import FirstBlogPreview from '../components/FirstBlogPreview';

const HomePage: React.FC = () => {
  const [firstBlog, ...remainingBlogs] = blogData;

  return (
    <div>
      {/* Display the first blog separately */}
      <Link to={`/blog/${firstBlog.id}`}>
        <FirstBlogPreview blog={firstBlog} />
      </Link>

      {/* Display the remaining blogs */}
      <div className="px-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {remainingBlogs.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`}>
            <BlogPreview blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};


export default HomePage;
