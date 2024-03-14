import { useState } from 'react';
import React from 'react'
import './App.css'
import feedbackData from './data/feedbackData';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';

const App = () => {

  const [feedback, setFeedback] = useState(feedbackData)

  return (
      <>
        <Header text="Feedback UI" />
        <div className='container'>
          <FeedbackList feedback={feedback}/>
        </div>
      </>
    
  )
}

export default App
