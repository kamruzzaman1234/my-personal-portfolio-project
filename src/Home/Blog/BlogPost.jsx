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
        <h1 className="text-3xl font-oldstandard font-bold mb-4">Blog Post Title</h1>
        <p className=" mb-6 text-white">This is the detailed content of the blog post.</p>
        <Link to="/blog" className="bg-green-500 font-bold text-white">New Blog</Link>

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <textarea 
            value={commentText} 
            onChange={(e) => setCommentText(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mb-4" 
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
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
