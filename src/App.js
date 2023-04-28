// import "bulma/css/bulma.css";

// import other required components, styles and images
// import AnimalShow from "./AnimalShow";
// import ProfileCard from "./ProfileCard";
// import AlexaImage from "./images/alexa.png";
// import CortanaImage from "./images/cortana.png";
// import SiriImage from "./images/siri.png";

// function App() {
//   return (
//     <div>
//       {/* Title */}
//       <section className="hero is-primary">
//         <div className="hero-body">
//           <p className="title">Personal Digital Assistants</p>
//         </div>
//       </section>

//       <div className="container">
//         <section className="section">
//           <div className="columns">
//             <div className="column is-4">
//               <ProfileCard
//                 name="Moch Azmi Iskandar"
//                 username="azmi@gmail.com"
//                 image={AlexaImage}
//                 description={
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                 }
//               />
//             </div>
//             <div className="column is-4">
//               <ProfileCard
//                 name="Test 1"
//                 username="azmi@gmail.com"
//                 image={SiriImage}
//                 description={
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                 }
//               />
//             </div>
//             <div className="column is-4">
//               <ProfileCard
//                 name="Test 2"
//                 username="azmi@gmail.com"
//                 image={CortanaImage}
//                 description={
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                 }
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
// Import React hooks and AnimalShow component
import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
// Import animal SVG images
import birdSvg from "./svgs/bird.svg";
import catSvg from "./svgs/cat.svg";
import cowSvg from "./svgs/cow.svg";
import dogSvg from "./svgs/dog.svg";
import gatorSvg from "./svgs/gator.svg";
import horseSvg from "./svgs/horse.svg";

// Map animal names to their respective SVG images
const animalMap = {
  birdSvg,
  catSvg,
  cowSvg,
  dogSvg,
  gatorSvg,
  horseSvg,
};

// Function to get a random animal name
const getRandomAnimal = () => {
  const animals = Object.keys(animalMap);
  return animals[Math.floor(Math.random() * animals.length)];
};

// Create App functional component
function App() {
  // Set up state for animals array using useState hook
  const [animals, setAnimals] = useState([]);

  // Define a function to handle Add Animal button click
  const handleClick = () => {
    const newAnimalName = getRandomAnimal();
    // Add a new animal object to the animals array with its name and image source
    setAnimals([
      ...animals,
      { name: newAnimalName, src: animalMap[newAnimalName] },
    ]);
  };

  // Render App component
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <AnimalShow animals={animals} />
    </div>
  );
}

export default App;