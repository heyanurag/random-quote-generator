import React, { useState, useEffect } from 'react'
import './App.css'
import Quotes from './components/Quotes'
import quotesService from './services/quotesService'

const App = () => {
	const [ quote, setQuote ] = useState('')
	const [ author, setAuthor ] = useState('')

	const getQuotes = () => {
		quotesService
			.getAllQuotes()
				.then(data => {
					let allQuotes = data.quotes
					let quoteIndex = Math.floor(Math.random()*allQuotes.length)
					let randomQuote = allQuotes[quoteIndex]
					setQuote(randomQuote.quote)
					setAuthor(randomQuote.author)
				})
	}

	useEffect(() => {
		getQuotes()
	}, [])
  
	return (
		<div className="App">
			<Quotes quote={quote} author={author} getQuotes={getQuotes} />
		</div>
  	)
}

export default App
