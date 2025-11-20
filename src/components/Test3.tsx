import { useEffect, useState } from "react";



function Counter() {

    const [count, setCount] = useState(0)



    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);



    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>Count up</button>
            <button onClick={() => setCount(count - 1)}>Count down</button>

        </div>
    )

};

export default Counter;