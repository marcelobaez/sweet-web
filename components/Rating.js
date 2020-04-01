import React from "react";

const Rating = ({ rating }) => {
  const ratingContainer = [];

  for (let i = 0; i < 5; i++) {
    ratingContainer.push(
      <svg
        className={`h-3 w-3 fill-current ${
          i + 1 <= rating ? "text-pink-500" : "text-gray-400"
        }`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        key={`icon-${i}`}
      >
        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
      </svg>
    );
  }

  return <React.Fragment>{ratingContainer}</React.Fragment>;
};

export default Rating;
