import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddCardButton from './AddCardButton'
import Form from './Form'
import LoginPage from './LoginPage'

const App = () => {

  const[showForm, setShowForm] = useState(false);

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleShowForm = () => {
    setShowForm(true);
  };

  const onLogin = () => {
    setIsLoggedIn(true);
  }

  if (!isLoggedIn){
    return <LoginPage login={onLogin} />
  }

  return (
    <div>

    <AddCardButton click={handleShowForm} />
    {showForm && <Form clickClose={() => setShowForm(false)} />}

    </div>
  );
};

export default App
