import React, { useReducer } from "react"



export const CountContext = React.createContext({})

const initialState = {
    count: 0,
}

function reducerFunc(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            }
        case "DECREMENT":
            return {
                count: state.count - 1,
            }
        default:
            return initialState
    }
}

function CountContextComponent({ children }) {
    const [state, dispatch] = useReducer(reducerFunc, initialState)

    return (
        <CountContext.Provider value={{ state, dispatch }}>
            {children}
        </CountContext.Provider>
    )
}



export default CountContextComponent