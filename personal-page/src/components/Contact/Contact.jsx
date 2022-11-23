/*--------------  Contact Functional Component  ---------------*/

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






/*--------------  Contact Class Component  ---------------*/
// import React, { Component } from 'react'
// import './Contact.css'

// export class Contact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             email: "",
//             message: "",
//             validationMessage: "",
//             visible: false,
//             btnDisabled: true,
//             submitCorrect: false
//         }
//         this.initialState = {
//             name: "",
//             email: "",
//             message: "",
//             validationMessage: "",
//             visible: false,
//             btnDisabled: true,
//             submitCorrect: false
//         }
//     }

//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value,
//         });
//         if(event.target.name === "name") {
//             this.setState( { 
//                 visible: true
//             });
//             if (event.target.value.length < 4) {
//                 this.setState( { 
//                     validationMessage: "Name must be at least 4 characters",
//                     btnDisabled: true
//                 });
//             } else {
//                 this.setState( { 
//                     validationMessage: null,
//                     btnDisabled: false,
//                     visible: false
//                 });
//             }
//         }
//     };
        
//     clearState = () => {
//         this.setState({ ...this.initialState });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         localStorage.setItem('formReact', JSON.stringify({
//             name: this.state.name,
//             email: this.state.email,
//             message: this.state.message
//         }))
//         this.clearState();
//         setTimeout(() => {
//             console.log(this.props);
//             this.props.history.push('/')
//         }, 3000);
//         this.setState( { 
//             submitCorrect: true,
//             visible: false
//         });
//     };

//     render() {
//         return (
//             <div className='contact'>
//                 <div className='contact-container'>
//                     <h1>Contact</h1>
//                     <form onSubmit={this.handleSubmit}>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" value={this.state.name} name="name" id="name" className="name" onChange={this.handleInputChange} />
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" value={this.state.email} name="email" id="email" className="email" onChange={this.handleInputChange} />
//                         <label htmlFor="message">Message:</label>
//                         <textarea name="message" value={this.state.message} id="message" className="message" rows="3" onChange={this.handleInputChange}></textarea>
//                         <span className="validation-error">{ this.state.visible ? this.state.validationMessage : null }</span>
//                         <span className="validation-success">{ this.state.submitCorrect ? 'Redirecting to Home...' : null }</span>
//                         <button type="submit" className="submit" disabled={this.state.btnDisabled}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Contact