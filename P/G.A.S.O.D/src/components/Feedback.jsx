import React, { useState } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/24/solid';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    const feedback = {
      rating,
      comment,
    };

    axios.post('http://localhost:3000/feedback', feedback)
      .then(() => {
        alert('Thank you for your feedback!');
        setRating(0);
        setComment('');
      })
      .catch(error => console.error('Error submitting feedback:', error));
  };

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleRatingMouseEnter = (rate) => {
    setHoverRating(rate);
  };

  const handleRatingMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-red-600">Customer Feedback</h2>
      <div className="border rounded-lg p-4 bg-black-300  text-slate-950 shadow-md">
        <div className="mb-4">
          <label className="block text-red-600 mb-2">Rating</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((rate) => (
              <StarIcon
                key={rate}
                className={`w-8 h-8 cursor-pointer ${
                  (hoverRating || rating) >= rate ? 'text-yellow-400' : 'text-blue-600'
                }`}
                onClick={() => handleRatingClick(rate)}
                onMouseEnter={() => handleRatingMouseEnter(rate)}
                onMouseLeave={handleRatingMouseLeave}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-red-700 mb-2">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg p-2 w-full"
            rows="4"
          />
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 text-red-800 p-2 rounded-lg">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;
