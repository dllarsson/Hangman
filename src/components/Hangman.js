import React, {useState} from 'react'
import word from '../words'
import Button from './Button'
import '../styles/style.css'
import Letter from './Letter'

const Hangman = () => {
    const lettersArray = "abcdefghijklmnopqrstuvwxyzåäö".split('')
    
    const [guessedLetters, setLetters] = useState([])
    const [currentWord, setWord] = useState(word())
    const [isDisabled, setDisable] = useState([])
    const [numberOfGuesses, setGuesses] = useState(0)

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
    }
    
    
    return (
        <div>
            <p>{currentWord}</p>
            <div id="wordContainer">
                {printWord}
            </div>
            <p>Antal gissningar: {numberOfGuesses}</p>
            <div className="buttonContainer">
                {buttons}
            </div>
            <button onClick={reset}>Återställ</button>
        </div>
    )
}

export default Hangman