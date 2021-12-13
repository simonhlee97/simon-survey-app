import React, { useState, useEffect } from 'react'

function Bitcoin() {
	const [price, setPrice] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://blockchain.info/ticker')
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setPrice(data.USD.last)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<div className="btc">
			<img src="https://img.icons8.com/officel/16/000000/bitcoin.png" alt="btc" />
			<span className="btc-price">{loading ? 'LOADING' : '$' + price}</span>
		</div>
	)
}

export default Bitcoin
