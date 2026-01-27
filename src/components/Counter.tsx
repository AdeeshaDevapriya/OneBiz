import React from 'react';
import { useState } from 'react'
import { Button } from '@mui/material'

function Counter() {

  const [count, setCount] = useState(0)
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };
  

    return (
        <div>
            <h1>Counter Interface</h1>
            <p> Count: {count}</p>

            <Button onClick={() => setCount(count + 1)}>Increase</Button>
            <Button onClick={() => setCount(count - 1)}>Decrease</Button>
            <Button onClick={() => setCount(0)}>Reset</Button>

        </div>
    )
}

export default Counter
