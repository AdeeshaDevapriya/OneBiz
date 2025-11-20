// import { useEffect, useState } from "react";



// function food() {


//     const [food, setFood] = useState("")

//     useEffect(() => {
//         if (food) {
//             console.log("food is :", food)
//         }
//     }, [food]);


//     return (
//         <div>
//             <p>Food is: {food}</p>


//             <button onClick={() => setFood("pizza")}>Pizza</button>
//             <button onClick={() => setFood("pasta")}>Pasta</button>
//         </div>
//     )
// };

// export default food;

import { useReducer } from "react";

function cartReducer(state: any[], action: { type: string; item: string; }) {
    switch (action.type) {
        case "add":
            return [...state, action.item];
        case "remove":
            return state.filter(i => i !== action.item);
        case "clear":
            return [];
        default:
            return state;
    }
}

function Shop() {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <div>
            <button onClick={() => dispatch({ type: "add", item: "Apple" })}>
                Add Apple
            </button>
            <button onClick={() => dispatch({ type: "remove", item: "Apple" })}>
                Remove Apple
            </button>
            <button onClick={() => dispatch({
                type: "clear",
                item: ""
            })}>Clear Cart</button>

            <h2>Cart: {cart.join(", ")}</h2>
        </div>
    );
}


export default Shop;
