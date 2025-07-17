import { useState } from 'react'
import './App.css'

const LoginPage = ({login}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('login')


    const handleLogin = (e) => {
        if(mode === 'login'){
            e.preventDefault();
            console.log(username);
            console.log(password);
            console.log('login')
            login();
        }else {
            e.preventDefault();
            console.log(username);
            console.log(password);
            console.log('signup')
            login();
        }
    }

    return(
        <div className="modal-popup">

            <form onSubmit={handleLogin}>
                <h1>Simple Study</h1>
                <br />
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/> <br /> <br />
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)}/> <br /> <br />
                <button type="submit" onClick={() => setMode('signup')}>Sign Up</button>
                <button type="submit" onClick={() => setMode('login')}>Log In</button>
            </form>
        </div>

    );
}

export default LoginPage;