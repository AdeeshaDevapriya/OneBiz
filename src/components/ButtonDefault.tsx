import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

// Define an interface for your props
interface ButtonnProps {
    countToDoDisplay: (count: number) => void;
    buttonName: string;
}


export default function Buttonn({ countToDoDisplay, buttonName }: ButtonnProps) {

    const [count, setCount] = useState(0);

    const [name, setName] = useState("")
    useEffect(() => {
        countToDoDisplay(count);
    }, [count, countToDoDisplay]);


    return (
        <div>
            <h1>COUNT INTERFACE</h1>
            <p>Count: {count}</p>

            <Button onClick={() => setCount(count + 1)}>
                {buttonName}
            </Button>

            <Button onClick={() => setCount(count - 1)}>
                {buttonName}
            </Button>

        </div>
    )
}