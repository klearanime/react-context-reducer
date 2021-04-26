import React, { useContext } from 'react'
import { CountContext } from "./context/CountContext"



function Counter() {
// const data = useContext(CountContext)
const {
    state: { count }, 
    dispatch,
} = useContext(CountContext)

    
    return (
        <div>
            <div>
                Counter: {count}
            </div>
            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
        </div>
    )
}



export default Counter
