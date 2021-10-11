import React, { useState } from 'react'
import './login.css';


function Login() {
       const [username,  setUsername] = useState("")
       const [password,  setPassword] = useState("")
    return (
        <div className="container">
            <form >
                {/* <v src="./components/login.mp4" /> */}
                <p>Helllo User, Welcome aboard.</p>
                <br />
                <input type="text" placeholder="Enter Username" className="input-field" />
                <br />
                <br />
                <input type="password" placeholder="Enter Password" className="input-field" />
                <br />
                <br />
                <input type="submit" className="btn" />
            </form>
        </div>
    );

}

export default Login
