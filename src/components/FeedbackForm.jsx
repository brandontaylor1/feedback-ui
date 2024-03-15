import { useState } from 'react';
import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import { FaCheckCircle } from 'react-icons/fa';

const FeedbackForm = ({addFeedback}) => {

    const [input, setInput] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value);
        if(input === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (input !== '' && input.length < 10) {
            setBtnDisabled(true);
            setMessage("Please enter at least 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(
                <div div className='message-div'>
                    <FaCheckCircle color='green' /> <p style={{color: 'green'}}>Looks Good!</p>
                </div>
                );
        }
        // {e.target.value.length < 10 ? setBtnDisabled(true) : setBtnDisabled(false)} 
        // {setBtnDisabled(true) ? setMessage('Please enter at least 10 characters' : setMessage())}
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            id: uuidv4(),
            rating: rating,
            text: input 
        }
        console.log(newFeedback)
        addFeedback(newFeedback); 

       setInput('')
    }

    // let message = input.length < 10 ? "Please enter at least 10 characters" : false

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us?</h2>
                    <RatingSelect select={(rating) => setRating(rating)} />
                        <div className="input-group">
                            <input 
                                onChange={handleInput} 
                                type="text" placeholder="Enter your feedback" 
                                value={input}

                                />
                            <Button 
                                text="Submit"
                                version='secondary'
                                type='submit'
                                isDisabled={btnDisabled}
                                
                                >Send!</Button>

                        </div>
                    <h3 style={{color: 'red'}}>{message}</h3>
            </form>
        </Card>

    )
}

export default FeedbackForm;