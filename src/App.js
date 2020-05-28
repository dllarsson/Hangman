import React from 'react';
import './App.css';
import getRandomWord from './words.js';


const letters = "abcdefghijklmnopqrstuvwxyzåäö";
let currentWord = "";

const lettersArray = letters.split('')
let numberOfGuesses = 0;

const guessLetter = (e) => {
  
  currentWord.split('').map((elem,index) => {
    if (elem === e.target.innerText){
       const element = document.getElementById(index);
       element.innerText = e.target.innerText;
     } 
  })
  e.target.disabled = true;
  numberOfGuesses++;
 return;
  
};



const reset = () => {
  let letterButton = Array.from(document.getElementsByClassName('letterButton'));
        letterButton.map(letterButton => {
        letterButton.disabled = false;
        })
}


const buttons = lettersArray.map(letter => <button onClick={guessLetter} key={letter.toString()} className="letterButton">{letter} </button>)
const printWord = () => {
  const word = getRandomWord();
  currentWord = word;
  return word.split('').map((elemm, index) => <p className="word" id={index} key={index}>_</p>);
}

function App() {
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>Gissa på en bokstav för att bygga ihop ett ord</p>
      <img id="gallow" src={require('./images/0.jpg')} alt="gallow"/>
      <p>Antal gissningar: {numberOfGuesses}</p>
      <div id="wordContainer">
      {printWord()}
      </div>
        {buttons}
      <button id="reset" onClick={reset()}>Återställ</button>
    </div>
  );
};

export default App;
