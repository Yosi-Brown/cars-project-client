import React, { useState, useEffect } from 'react';

function ProductReviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [userName, setUserName] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // אפשר להוסיף כאן בקשת API או קריאה ממקור חיצוני לביקורות
  }, []);

  const handleAddReview = () => {
    if (newReview.trim() !== '' && userName.trim() !== '') {
      const date = new Date().toLocaleDateString();
      const review = {
        user: userName,
        text: newReview,
        date: date
      };
      setReviews(prevReviews => [...prevReviews, review]);
      setNewReview('');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Reviews</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="border rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          className="border rounded-r py-2 px-4 flex-grow ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleAddReview}
        >
          Add Review
        </button>
      </div>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold text-gray-800">{review.user}</p>
            <p className="text-gray-600 mt-2">{review.text}</p>
            <p className="text-sm text-gray-500 mt-2">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductReviews;
