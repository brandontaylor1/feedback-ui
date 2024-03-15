import React from "react";
import PropTypes  from "prop-types";

const FeedbackStats = ({feedback}) => {
    let average = feedback.reduce((acc, item) => {
        return acc + item.rating / feedback.length
    }, 0)

    average = average.toFixed(1);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4> Average Rating: {average === 0 ? 0 : average} </h4>
        </div>
    )
}


FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}


export default FeedbackStats