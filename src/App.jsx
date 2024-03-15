import { useState } from 'react';
import React from 'react'
import './App.css'
import feedbackData from './data/feedbackData';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {

  const [feedback, setFeedback] = useState(feedbackData)

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const handleAddFeedback = (newFeedback) => {
    return setFeedback([...feedback, newFeedback])
  }

  return (
      <>
        <Header text="Feedback UI" />
        <div className='container'>
        <FeedbackForm addFeedback={handleAddFeedback}/>
        <FeedbackStats feedback={feedback} />
          <FeedbackList 
              feedback={feedback} 
              handleDelete={handleDelete}/>
        </div>
      </>
  )
}

export default App
