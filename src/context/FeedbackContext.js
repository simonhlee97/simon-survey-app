import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'this item is from Context',
			rating: 9,
		},
		{
			id: 2,
			text: 'a lorem ipsum item from Context',
			rating: 7,
		},
	])

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	const deleteFeedback = (id) => {
		// console.log('App', id)
		if (window.confirm('Are you sure?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	// came from App.js
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	// Update feedback item
	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
	}

	// turn on EDIT MODE for item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
