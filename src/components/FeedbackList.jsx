import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0) {
        return <h2>No feedback found</h2>
    } 
    return (
        <>
            <h1>Feedback List</h1>
            <div className="feedback-list">
                {feedback.map((item) => (
                    <FeedbackItem 
                        key={item.id}
                        item={item} />
                ))}
            </div>
        </>
    )
}


FeedbackList.PropTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList; 