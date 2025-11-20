import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Footer() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("This is count : ", (count));
    }, [count])


    useEffect(() => {
        if (count > 5) {
            console.log("up to 3");
        }
        else
            console.log("below to 5");
    }, [count])


    return (
        <div>
            <p> Count: {count}</p>




            {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}

            <Button onClick={() => setCount(count + 1)}>Increase</Button>

        </div>
    )
}