

import React, { useState } from 'react';

const Tour = ({ tour, setTours }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(prevState => !prevState);
  };

  const removeTour = () => {
    setTours(prevTours => prevTours.filter(t => t.id !== tour.id));
  };

  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <h2>{tour.name}</h2>
      <p>Price: ${tour.price}</p>
      <p>
        {showFullDescription ? tour.description : `${tour.description.slice(0, 200)}...`}
        <button onClick={toggleDescription}>
          {showFullDescription ? 'See less' : 'Show more'}
        </button>
      </p>
      <button onClick={removeTour}>Remove</button>
    </div>
  );
};

export default Tour;

