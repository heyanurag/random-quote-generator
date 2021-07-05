import React from 'react'
import twitterIcon from './twitterIcon.svg'

const Quotes = ({ quote, author, getQuotes }) => {

    const handleClick = () => getQuotes()

    return (
        <div id="quote-box">
          <div id="text"><p>{quote}</p></div>
          <div id="author"><p>- {author}</p></div>

          <div id="buttons">
            <div className="social-media">
                <span><img src={twitterIcon} alt="" /></span>
            </div>
            <button onClick={handleClick} id="new-quote">New Quote</button>
          </div>
        </div>
    )

}


export default Quotes
