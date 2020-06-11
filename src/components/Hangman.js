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
    const [numberOfGuesses, setGuesses] = useState(6)
    const [currentPicture, setPicture] = useState([Gallow0])
    const [hasWon, setWon] = useState(false)
    const [count, setCount] = useState(0)
    const [hasLost, setLost] = useState(false)

    const Gallows = [Gallow0,Gallow1,Gallow2,Gallow3,Gallow4,Gallow5,Gallow6]
    const uniqueLetters = Array.from(new Set(currentWord.split('')))

    useEffect(() => {
        setPicture(Gallows[count])
        setCount(count + 1)
        numberOfGuesses === 0 && setLost(true)

    }, [numberOfGuesses])
    useEffect(() => {
        guessedLetters.length === uniqueLetters.length && setWon(true)

    }, [guessedLetters])
    

    const printWord = currentWord.split('').map((ltr, index) => {
        
        return(
            <Letter 
                key={index} 
                className="letter"
                letter={guessedLetters.includes(ltr) ? ltr : " _ " } 
            />
        )
    })

    const guessLetter = (e) => {
        if (currentWord.includes(e.target.innerText)){
            setLetters(guessedLetters.concat(e.target.innerText))
        } else {
            setGuesses(numberOfGuesses - 1)
        }
        setDisable(isDisabled.concat(e.target.innerText))
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
       setGuesses(6)
       setLetters([])
       setWord(word())
       setWon(false)
       setLost(false)
       setCount(0)
    }
    
    
    return (
        <div>
            <div>
                {<img src={currentPicture} alt="gallow"/>}
            </div>
            <div id="wordContainer">
                {printWord}
            </div>
            {hasLost && <p style={{fontSize: "40px"}}>Du förlorade, ditt ord var: {currentWord}</p>}
            {hasWon && <p style={{fontSize: "40px", color: "blue"}}>Grattis du vann!</p>}
            <p>Antal gissningar: {numberOfGuesses}</p>
            <div className="buttonContainer">
                {hasWon || hasLost ? <Button handleClick={reset} buttonText="Spela igen!" className="letterButton"/> : buttons}
            </div>
            <button onClick={reset}>Återställ</button>
        </div>
    )
}

export default Hangman