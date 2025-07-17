import { useState } from 'react'
import './App.css'

const Form = ({clickClose}) => {


    const [cardSide1, setCardSide1] = useState('');
    const [cardSide2, setCardSide2] = useState('');

    const handleClickClose = (e) => {
        e.preventDefault();
        console.log(cardSide1);
        console.log(cardSide2);
        clickClose();
    }

    return(
        <div className="modal-popup">
            <form onSubmit={handleClickClose}>
                <br />
                <label>Index Card Side 1: </label>
                <input type="text" onChange={(e) => setCardSide1(e.target.value)}/> <br /> <br />
                <label>Index Card Side 2: </label>
                <input type="text" onChange={(e) => setCardSide2(e.target.value)}/> <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default Form;