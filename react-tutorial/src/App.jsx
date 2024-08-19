import React from 'react'
import Player from './Player';
import styles from "./App.module.css";
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  let [winner,setWinner] = useState("");
  let [dice1,setDice1] = useState(null);
  let [dice2,setDice2] = useState(null);
  let [newGame,setNewGame] = useState(0);

  useEffect(()=>{

    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomNumber2 = Math.floor(Math.random() * 6);
    setDice1(randomNumber1);
    setDice2(randomNumber2);
    if(randomNumber1>randomNumber2){
      setWinner("Player 1 is the winner");
    }else if(randomNumber1<randomNumber2){
      setWinner("PLayer 2 is the winner");
    }else{
      setWinner("Its a draw!")
    }


  },[newGame]);


  return (
    <>
    <h1 className={styles.heading}>{winner}</h1>
    <div className={styles.container}>
      
      <Player playerNumber="Player 1" dice = {dice1}/>
      <Player playerNumber="Player 2" dice={dice2}/>
    </div>
    <button className={styles.button} onClick={()=>{
      setNewGame(!newGame);
    }}>Play</button>
    </>
  )
}

export default App;
