import React, { useState, useEffect } from 'react';

const App = () => {
    const [sol, setSol] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/solutions')
            .then((res) => res.json())
            .then((json) => {
                const randomSol = json[Math.floor(Math.random() * json.length)];
                setSol(randomSol.word);
            });
    }, [setSol]);

    return (
    <div className="App">
      <h1>Wordle</h1>
      {sol && <h3>Solution is: {sol}</h3>}
    </div>
      )
};

export default App;
