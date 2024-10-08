import { useState } from 'react';
import {Link} from 'react-router-dom'

const BlogPost = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    setComments([...comments, commentText]);
    setCommentText('');
  };

  return (
    <div className="container mx-auto py-20">
      <div className=" shadow-md rounded-lg p-6">
        <h1 className="text-[18px] md:text-[28] lg:text-4xl font-oldstandard uppercase font-bold">Blog Post Title</h1>
        <p className=" mb-6 text-white">This is the detailed content of the blog post.</p>

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <textarea 
            value={commentText} 
            onChange={(e) => setCommentText(e.target.value)} 
            className="w-full p-2 text-black rounded mb-4" 
            placeholder="Write your comment..." 
          />
          <button 
            onClick={handleAddComment} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add Comment
          </button>
          
          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <p key={index} className="border-b border-gray-300 py-2">{comment}</p>
            ))}
          </div>
          <div className="pt-6">
          <Link to="/blog"
         className="bg-green-500 p-4 rounded-lg btn font-bold text-white">
             New Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
