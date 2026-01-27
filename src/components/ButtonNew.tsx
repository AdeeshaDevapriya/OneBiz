import { Button } from '@mui/material'
import { useEffect, useReducer, useState } from 'react'

// 1. Define types for State and Action
interface State {
    count: number;
}

type Action = 
    | { type: 'increment' }
    | { type: 'decrement' };

// Define an interface for your props
interface ButtonnProps {
    countToDoDisplay: (count: number) => void;
    buttonName: string;
    action: any;
    state: any;
}


export default function Buttonn({ countToDoDisplay, buttonName }: ButtonnProps) {

    //const [count, setCount] = useState(0);

    const reducer = (state: State, action: Action): State => {
        if (action.type == 'increment') {
            return {count: state.count + 1};
        } else {
            return {count: state.count - 1};
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 });


    useEffect(() => {
        // Now this will work because countToDoDisplay is a function
        countToDoDisplay(state.count);
    }, [state.count, countToDoDisplay]);


    return (
        <div>
            <h1>COUNT INTERFACE</h1>
            <p>Count: {state.count}</p>

            <Button onClick={() => dispatch({type: 'increment'})}>
                Increment
            </Button>
            <Button onClick={() => dispatch({type: 'decrement'})}>
                Decrement
            </Button>
        </div>
    )
}