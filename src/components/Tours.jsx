import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, setTours }) => {
  return (
    <div className="tours-list">
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} setTours={setTours} />
      ))}
    </div>
  );
};

export default Tours;

