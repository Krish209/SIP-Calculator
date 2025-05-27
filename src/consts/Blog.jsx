import { Link } from "react-router-dom";
import { blogPosts } from "./BlogPost";

function BlogHome() {
  return (
    <div className="min-h-screen text-primary bg-gradient-to-b from-indigo-50 to-white">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          📚 Our Financial Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.path}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-500 group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-46 object-cover rounded-xl mb-2"
              />
              <div className="px-2 sm:px-4 py-2">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                  <span className="text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-md text-xs">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <span>{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogHome;
