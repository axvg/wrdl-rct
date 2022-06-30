import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ sol }) => {
    const { currentGuess, handleKeyup } = useWordle(sol);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    return (
        <div>
            {sol}
            <hr />
            current-guess - {currentGuess}
        </div>
    );
};

export default Wordle;
