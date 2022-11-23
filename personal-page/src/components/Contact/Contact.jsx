import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    let navigate = useNavigate();
    const initialState = {
        name: "",
        email: "",
        message: ""
    };
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [visible, setVisible] = useState(false);
    const [submitCorrect, setSubmitCorrect] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        if (data.name.length < 4) {
          setValidationMessage("Name must be at least 4 characters");
          setBtnDisabled(true);
        } else {
          setValidationMessage(null);
          setBtnDisabled(false);
          setVisible(false)
        }
    }, [data]);

    const handleInputChange = (event) => {
        if(event.target.name === "name")
            setVisible(true)
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
      };

    const clearState = () => {
        setData({ ...initialState });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('formReact', JSON.stringify(data))
        clearState();
        setTimeout(() => {
            navigate('/')
        }, 3000);
        setSubmitCorrect(true)
        setVisible(false)
    };

    return (
        <div className='contact'>
        <div className='contact-container'>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" value={data.name} name="name" id="name" className="name" onChange={handleInputChange} />
                <label htmlFor="email">Email:</label>
                <input type="email" value={data.email} name="email" id="email" className="email" onChange={handleInputChange} />
                <label htmlFor="message">Message:</label>
                <textarea name="message" value={data.message} id="message" className="message" rows="3" onChange={handleInputChange}></textarea>
                <span className="validation-error">{ visible ? validationMessage : null }</span>
                <span className="validation-success">{ submitCorrect ? 'Redirecting to Home...' : null }</span>
                <button type="submit" className="submit" disabled={btnDisabled}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Contact