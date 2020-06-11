import React, {useState, useEffect} from 'react'
import word from '../words'
import Button from './Button'
import '../styles/style.css'
import Letter from './Letter'
import Gallow0 from '../images/0.jpg'
import Gallow1 from '../images/1.jpg'
import Gallow2 from '../images/2.jpg'
import Gallow3 from '../images/3.jpg'
import Gallow4 from '../images/4.jpg'
import Gallow5 from '../images/5.jpg'
import Gallow6 from '../images/6.jpg'


const Hangman = () => {
    const lettersArray = "abcdefghijklmnopqrstuvwxyzåäö".split('')
    
    const [guessedLetters, setLetters] = useState([])
    const [currentWord, setWord] = useState(word())
    const [isDisabled, setDisable] = useState([])
    const [numberOfGuesses, setGuesses] = useState(0)
    const [currentPicture, setPicture] = useState([Gallow0])

    const Gallows = [Gallow0,Gallow1,Gallow2,Gallow3,Gallow4,Gallow5,Gallow6]

    useEffect(() => {
        setPicture(Gallows[numberOfGuesses])
    }, [numberOfGuesses])

    const printWord = currentWord.split('').map(ltr => {
        return(
            <Letter 
                key={ltr} 
                className="letter"
                letter={guessedLetters.includes(ltr) ? ltr : " _ " } 
            />
        )
    })
    

    const guessLetter = (e) => {
        setLetters(guessedLetters.concat(e.target.innerText))
        setDisable(isDisabled.concat(e.target.innerText))
        setGuesses(numberOfGuesses + 1)
        //guessedLetters.concat(e.target.innerText) || setPicture(ga)
        }
    const buttons = lettersArray.map((letter) => {
        return(
            <Button 
                handleClick={guessLetter} 
                key={letter} 
                buttonText={letter}
                isDisabled={isDisabled.includes(letter)}
                className={!isDisabled.includes(letter) ? "letterButton" : "letterButtonsDisabled"}
            />
        )
    })
     
    const reset = () => {
       setDisable([])
       setGuesses(0)
       setLetters([])
       setWord(word())
    }
    
    
    return (
        <div>
            <div>
                {<img src={currentPicture} alt="gallow"/>}
            </div>
            <div id="wordContainer">
                {printWord}
            </div>
            {numberOfGuesses > 5 && <p style={{fontSize: "40px"}}>Du förlorade</p>}
            <p>Antal gissningar: {numberOfGuesses}</p>
            <div className="buttonContainer">
                {buttons}
            </div>
            <button onClick={reset}>Återställ</button>
        </div>
    )
}

export default Hangman