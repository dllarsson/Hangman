import React, {useState} from 'react'
import Word from '../words'
import Button from './Button'
import '../styles/style.css'

const Hangman = () => {
    const lettersArray = "abcdefghijklmnopqrstuvwxyzåäö".split('')
    
    const [guessedLetters, setLetters] = useState([])
    const [currentWord, setWord] = useState(Word())
    const [isDisabled, setDisable] = useState([])

    const guessLetter = (e) => {
        setLetters(guessedLetters.concat(e.target.innerText))
        setDisable(isDisabled.concat(e.target.innerText))
        }
    const buttons = lettersArray.map((letter) => {
        return(
            <Button 
                handleClick={guessLetter} 
                className="letterButton"
                key={letter} 
                buttonText={letter}
                isDisabled={isDisabled.filter(item => item === letter)}
            />
        )
    })
     
    const reset = () => {
       setDisable([])
    }
    
    
    return (
        <div>
            <p>{currentWord}</p>
            <div className="buttonContainer">
                {buttons}
            </div>
            <button onClick={reset}>Återställ</button>
        </div>
    )
}

export default Hangman