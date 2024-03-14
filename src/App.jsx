import { useState } from 'react';
import React from 'react'
import './App.css'
import feedbackData from './data/feedbackData';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';

const App = () => {

  const [feedback, setFeedback] = useState(feedbackData)

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
      <>
        <Header text="Feedback UI" />
        <div className='container'>
          <FeedbackList 
              feedback={feedback} 
              handleDelete={handleDelete}/>
        </div>
      </>
  )
}

export default App
