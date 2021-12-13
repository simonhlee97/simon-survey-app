// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

function PollsPage() {
	return (
		<>
			<div className="about">
				<h1>Poll Generator</h1>
				<p>Make a Poll & Share</p>
				<p>
					<Link to="/">back to home</Link>
				</p>
			</div>
			<div className="typeofpoll">
				<h2>Create Your Poll</h2>
				<AddQuestion />
			</div>
		</>
	)
}

function AddQuestion() {
	const inputStyle = {
		backgroundColor: 'grey',
		border: '1px solid black',
	}

	const showOptions = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<input className={inputStyle} type="text" id="question" />
			<button onClick={showOptions}>
				Add <FaPlus />
			</button>
		</>
	)
}

export default PollsPage
