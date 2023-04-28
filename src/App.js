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
import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
// Impor gambar SVG dari folder svgs
import birdSvg from "./svgs/bird.svg";
import catSvg from "./svgs/cat.svg";
import cowSvg from "./svgs/cow.svg";
import dogSvg from "./svgs/dog.svg";
import gatorSvg from "./svgs/gator.svg";
import horseSvg from "./svgs/horse.svg";

const getAnimalImageUrl = (animal) => {
  // Menggantikan gambar dengan gambar SVG yang sesuai
  switch (animal) {
    case "bird":
      return birdSvg;
    case "cat":
      return catSvg;
    case "cow":
      return cowSvg;
    case "dog":
      return dogSvg;
    case "gator":
      return gatorSvg;
    case "horse":
      return horseSvg;
    default:
      return "";
  }
};

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  // State management
  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    const newAnimal = {
      name: getRandomAnimal(),
      src: getAnimalImageUrl(getRandomAnimal()),
    };
    setAnimal([...animals, newAnimal]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <AnimalShow animals={animals} />
    </div>
  );
}

export default App;

