import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	const deleteFeedback = (id) => {
		// console.log('App', id)
		if (window.confirm('Are you sure?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route
						path="/"
						exact
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
							</>
						}></Route>
					<Route path="/about" element={<AboutPage />} />
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	)
}

export default App
