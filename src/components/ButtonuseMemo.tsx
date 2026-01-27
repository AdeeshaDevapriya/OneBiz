import { Button } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

// Define an interface for your props
interface ButtonnProps {
    countToDoDisplay: (count: number) => void;
    buttonName: string;
}


export default function Buttonn({ countToDoDisplay, buttonName }: ButtonnProps) {

    const [count, setCount] = useState(0);

    const [name, setName] = useState("")

    //---------------------------------------

    // const [multiply, setMultiply] = useState(1)
    // useEffect(() => {
    //     setMultiply(count * 2);
    // }, [count])

    //---------------useMemo-----------------

    const multiply = useMemo(() => count * 2, [count])


    useEffect(() => {
        countToDoDisplay(count);
    }, [count, countToDoDisplay]);

    console.log("Name: -", name);
    console.log("Count: -", count);
    console.log("Multiply: -", multiply);



    return (
        <div>
            <h1>COUNT INTERFACE</h1>
            <p>Count: {count}</p>

            <Button onClick={() => setCount(count + 1)}>
                {buttonName}
            </Button>

            <Button onClick={() => setName("Adeesha")}>
                Change Name
            </Button>

        </div>
    )
}