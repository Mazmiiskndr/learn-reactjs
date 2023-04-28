// Import necessary React hooks and components
import React, { useState } from "react";
import heartSvg from "./svgs/heart.svg";
import "./AnimalShow.css";

// Create AnimalShow functional component that takes animals as a prop
const AnimalShow = ({ animals }) => {
  // Set up state for heartPercentage using useState hook
  const [heartPercentage, setHeartPercentage] = useState({});

  // Define a function to handle animal click
  const handleAnimalClick = (index) => {
    // Get the current percentage for the clicked animal or use 0 if undefined
    const currentPercentage = heartPercentage[index] || 0;
    // Update the state of heartPercentage for the clicked animal
    setHeartPercentage({
      ...heartPercentage,
      [index]: currentPercentage + 10,
    });
  };

  // Render AnimalShow component
  return (
    <div>
      <h1>Animal Show</h1>
      <ul className="animal-list">
        {animals.map((animal, index) => (
          <li key={index} className="animal-item">
            <div className="card" onClick={() => handleAnimalClick(index)}>
              <img
                className="animal-image"
                src={animal.src}
                alt={animal.name}
              />
              <img
                src={heartSvg}
                alt="heart"
                className="heart"
                style={{
                  width: `${heartPercentage[index] || 0}%`,
                  height: `${heartPercentage[index] || 0}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalShow;
