import { useState } from 'react'
import './App.css'

const LoginPage = ({login}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('login');
    const [message, setMessage] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        const endpoint = mode === 'login' ? '/api/login' : '/api/signup'

            try{
                const response = await fetch('http://54.196.116.98:5000' + endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password})
                });

                const data = await response.json();

                //find a spot to use message, message is currently not displayed
                if (response.ok){
                    setMessage(`Success: ${data.message}`);
                } else {
                    setMessage(`Error: ${data.error} || Signup Failed`);
                }
            
            } catch (err){
                setMessage(`Error: ${err.message}`);
            }

            login();

    };

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