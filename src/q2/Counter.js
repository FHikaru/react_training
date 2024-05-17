import React from 'react'
import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incriment = () => setCount(prevCount => prevCount + 1);

    return (
        <div>
            <button onClick={incriment}>インクリメント</button>
            <h2>{count}</h2>
        </div>
    );
}

export default Counter;