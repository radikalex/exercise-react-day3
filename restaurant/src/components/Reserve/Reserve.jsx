/*--------------  Reserve Functional Component  ---------------*/

import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import './Reserve.css'

const Reserve = () => {
    let navigate = useNavigate();
    const initialState = {
        name: "",
        date: "",
        comment: ""
    };
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [visible, setVisible] = useState(false);
    const [submitCorrect, setSubmitCorrect] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [data, setData] = useState({
        name: "",
        date: "",
        comment: ""
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
        localStorage.setItem('formReactRestaurant', JSON.stringify(data))
        clearState();
        setTimeout(() => {
            navigate('/')
        }, 3000);
        setSubmitCorrect(true)
        setVisible(false)
    };

    return (
        <div className='reserve'>
            <div className='reserve-container'>
                <h1>Reserve</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={data.name} name="name" id="name" className="name" onChange={handleInputChange} />
                    <label htmlFor="date">Date:</label>
                    <input type="date" value={data.date} name="date" id="date" className="date" onChange={handleInputChange} />
                    <label htmlFor="comment">Reservation comment:</label>
                    <textarea name="comment" value={data.comment} id="comment" className="comment" rows="3" onChange={handleInputChange}></textarea>
                    <span className="validation-error">{ visible ? validationMessage : null }</span>
                    <span className="validation-success">{ submitCorrect ? 'Redirecting to Home...' : null }</span>
                    <button type="submit" className="submit" disabled={btnDisabled}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Reserve





/*--------------  Reserve Class Component  ---------------*/
// import React, { Component } from 'react'
// import { useNavigate } from "react-router-dom";
// import './Reserve.css'

// export class Reserve extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             date: "",
//             comment: "",
//             validationMessage: "",
//             visible: false,
//             btnDisabled: true,
//             submitCorrect: false
//         }
//         this.initialState = {
//             name: "",
//             date: "",
//             comment: "",
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
//         localStorage.setItem('formReactRestaurant', JSON.stringify({
//             name: this.state.name,
//             date: this.state.date,
//             comment: this.state.comment
//         }))
//         this.clearState();
//         setTimeout(() => {
//             const navigate = useNavigate();
//             navigate('/')
//         }, 3000);
//         this.setState( { 
//             submitCorrect: true,
//             visible: false
//         });
//     };

//     render() {
//         return (
//             <div className='reserve'>
//                 <div className='reserve-container'>
//                     <h1>Reserve</h1>
//                     <form onSubmit={this.handleSubmit}>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" value={this.state.name} name="name" id="name" className="name" onChange={this.handleInputChange} />
//                         <label htmlFor="date">Date:</label>
//                         <input type="date" value={this.state.date} name="date" id="date" className="date" onChange={this.handleInputChange} />
//                         <label htmlFor="comment">Reservation comment:</label>
//                         <textarea name="comment" value={this.state.comment} id="comment" className="comment" rows="3" onChange={this.handleInputChange}></textarea>
//                         <span className="validation-error">{ this.state.visible ? this.state.validationMessage : null }</span>
//                         <span className="validation-success">{ this.state.submitCorrect ? 'Redirecting to Home...' : null }</span>
//                         <button type="submit" className="submit" disabled={this.state.btnDisabled}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Reserve