import React, { useState } from 'react';
import { themeClass, exampleStyle } from './styles.css';

import Grid from './Grid';
import { Fleet } from './Grid';

export default function App()
{
    const [count, setCount] = useState(0);

    function onClick()
    {
        setCount(count + 1)
    }

    return (<div className={themeClass}>
        <h1 className={exampleStyle}>Hello, world!</h1>
        <p>React rocks :) {count}</p>
        <button onClick={onClick}>Click here!</button>
        <h2>Fleet</h2>
        <Fleet />
        <h2>Player</h2>
        <Grid />
        <h2>Enemy</h2>
        <Grid />
        </div>)
}

