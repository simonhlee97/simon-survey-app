import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList() {
	// no longer need feedback as prop
	// fetch global state (feedback) from FeedbackContext
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}

	// WITHOUT FRAMER ANIMATION
	// return (
	// 	<div className="feedback-list">
	// 		{feedback.map((item) => (
	// 			<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
	// 		))}
	// 	</div>
	// )

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

// FeedbackList.propTypes = {
// 	feedback: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			text: PropTypes.string.isRequired,
// 			rating: PropTypes.number.isRequired,
// 		})
// 	),
// }
export default FeedbackList
