import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
// import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import PollsPage from './pages/PollsPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bitcoin from './pages/Bitcoin'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							path="/"
							exact
							element={
								<>
									<FeedbackForm />
									{/* <FeedbackStats feedback={feedback} />  feedback is now from Context, not props */}
									<FeedbackStats />

									<FeedbackList
									// feedback={feedback} // dont need anymore
									// handleDelete={deleteFeedback}  // delete function was moved to Context
									/>
								</>
							}></Route>
						<Route path="/about" element={<AboutPage />} />
						<Route path="/polls" element={<PollsPage />} />
						<Route path="/bitcoin" element={<Bitcoin />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
