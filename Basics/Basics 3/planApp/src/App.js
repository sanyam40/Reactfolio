import React, { useState } from "react";
import Tour from "./components/Tour";
import data from './data'

const App = () => {
  const [tour, setTour] = useState(data);

  function removeTour(id) {
    console.log(id);
    const newTours = tour.filter(item => item.id !== id);
    setTour(newTours);
  }

  if (tour.length === 0) {
    return (
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={() => setTour(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <Tour tour={tour} removeTour={removeTour} />
    </div>
  );
};

export default App;
