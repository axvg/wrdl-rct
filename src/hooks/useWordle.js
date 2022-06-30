import { useState } from 'react';

const useWordle = (sol) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log('formating the currentguess-', currentGuess);
    };

    const addNewGuess = () => {};

    const handleKeyup = (e) => {
        if (e.key === 'Enter') {
            if (turn > 5) {
                console.log('you used all your guesses');
                return;
            }

            if (history.includes(currentGuess)) {
                console.log('you already guessed that word');
                return;
            }

            if (currentGuess.length !== 5) {
                console.log('words must be 5 chars long');
                return;
            }
            formatGuess();
            setGuesses(guesses.concat(currentGuess));
        }

        if (e.key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));
        }

        if (/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + e.key);
            }
        }
    };

    return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
