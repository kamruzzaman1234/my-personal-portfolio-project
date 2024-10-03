import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-4xl font-bold">My Blog</h2>
        <p className="text-2xl">Discover my thoughts on web development and more.</p>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example of a blog post preview */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-black">Title of the Post</h3>
          <p className="mt-4 text-gray-600">This is a brief summary of the blog post.</p>
          
          <div className="mt-4">
            <Link 
              to="/blogPost" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
