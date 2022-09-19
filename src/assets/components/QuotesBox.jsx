import React from "react";

const QuotesBox = ({ randomQuote, randomColor,getRandomAll }) => {
	const colorOb = {
		color: randomColor,
	};
	const backgroundOb = {
		backgroundColor: randomColor,
	};

	return (
		<article style={colorOb} className="card">
           
			<p className="card_quote">{randomQuote.quote}</p>
			<h1 className="card_author">{randomQuote.author}</h1>
			<button 
            className="card_btn"  
            style={backgroundOb}
            onClick = {getRandomAll}>
				&#62;
			</button>
		</article>
	);
};

export default QuotesBox;
