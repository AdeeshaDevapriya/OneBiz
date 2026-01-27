import { useRef, useState, useTransition } from "react";
import { useAppContext } from "../AppProvider";
import { Button } from "@mui/material";

interface DisplayProps {
    newCount: any;
}

const Display = () => {

    const [input, setInput] = useState("");


    const ref = useRef<any | undefined>(null);

    function handleChange(e: any) {

        const value = e.target.value
        setInput(value);
    }

    function focusInput() {
        ref.current?.focus();
    }



    const { value } = useAppContext();

    return (
        <div>
            <h2>{value}</h2>

            <Button onClick={focusInput}>Focus Input</Button>
            <br></br>

            <input
                ref={ref}
                value={input}
                onChange={handleChange}
                placeholder="Type here"
            />

        </div>
    )

}

export default Display;