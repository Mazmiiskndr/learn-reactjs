import React from "react";
import heartSvg from "./svgs/heart.svg";
import "./AnimalShow.css";

class AnimalShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartPercentage: {},
    };
  }

  handleAnimalClick = (index) => {
    const { heartPercentage } = this.state;
    const currentPercentage = heartPercentage[index] || 0;
    this.setState({
      heartPercentage: {
        ...heartPercentage,
        [index]: currentPercentage + 10,
      },
    });
  };

  render() {
    const { animals } = this.props;
    const { heartPercentage } = this.state;

    return (
      <div>
        <h1>Animal Show</h1>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: 0,
            listStyle: "none",
          }}
        >
          {animals.map((animal, index) => (
            <li key={index} style={{ margin: "20px", position: "relative" }}>
              <div className="card">
                <img
                  className="animal-image"
                  src={animal.src}
                  alt={animal.name}
                  onClick={() => this.handleAnimalClick(index)}
                />
                <img
                  src={heartSvg}
                  alt="heart"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: `${heartPercentage[index] || 0}%`,
                    height: `${heartPercentage[index] || 0}%`,
                    zIndex: 1,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnimalShow;
