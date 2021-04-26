import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"



function Navbar() {
    // const context = useContext(AuthContext)
    const {
        state: { isAuth, user },
        dispatch,
    } = useContext(AuthContext)

    return (
        <div>
            <ul>
                <li>{isAuth && user ? (
                <span onClick={() => dispatch({type: "LOGOUT"})}>logout</span> 
                ) : ( <span>Please login</span>
                )}
                </li>
                <li>{isAuth && user ? (
                    <span>Email: {user.email}</span>
                ) : (
                        <span>Login</span>
                    )}
                </li>
            </ul>
        </div>
    )
}



export default Navbar