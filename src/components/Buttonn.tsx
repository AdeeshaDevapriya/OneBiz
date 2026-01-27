import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../AppProvider';

// Define an interface for your props
interface ButtonnProps {
    buttonName: string;
    toDisplay: any;
}


const Buttonn = React.memo(({ toDisplay, buttonName }: ButtonnProps) => {

    const {setValue} = useAppContext();

    return (
        <div>
            <h1>COUNT INTERFACE</h1>
            <Button onClick={() => setValue((count) => count + 1)}>
                {buttonName}
            </Button>
        </div>
    )

})

export default Buttonn