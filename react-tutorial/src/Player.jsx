import React from 'react';
import image1 from "./assets/dice1.png";
import image2 from "./assets/dice2.png";
import image3 from "./assets/dice3.png";
import image4 from "./assets/dice4.png";
import image5 from "./assets/dice5.png";
import image6 from "./assets/dice6.png";


let diceImages = [image1,image2,image3,image4,image5,image6];

const Player = ({playerNumber,dice}) => {
  return (
    <div>
        <h1>{playerNumber}</h1>
        <img src={diceImages[dice]}/>
    </div>
  )
}

export default Player;