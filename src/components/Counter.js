import React, { useState } from 'react'
import Button from '@mui/material/Button';

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

  return (
    <div>
        <h2>{count}</h2>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}
