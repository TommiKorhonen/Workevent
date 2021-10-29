import React from 'react'
import { useHistory } from 'react-router-dom';
const SignedOutMenu = ({ setAuthenticated }) => {
    let history = useHistory();
    return (
        <div className="flex text-white items-center justify-end gap-3">
            <button onClick={() => setAuthenticated(true)} className="navbtn">Login</button>
            <button onClick={() => history.push("/register")} className="navbtn">Register</button>
        </div>
    )
}

export default SignedOutMenu
