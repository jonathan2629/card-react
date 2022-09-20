import "./App.css";
import { useState } from "react";
import QuotesBox from "./assets/components/QuotesBox";
import quotes from "./json/quotes.json";
import color from "./utils/colors";


function App() {
	const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);

	const firstQuote = quotes[getIndexRandom(quotes)];
	const firstColor = color[getIndexRandom(color)];

	const [randomQuote, setRandomQuote] = useState(firstQuote);
	const [randomColor, setRandomColor] = useState(firstColor);

	const bacgroudObject = {
		backgroundColor: randomColor,
	};

	//una funcion para el boton y este cambia el color y el texto//
	const getRandomAll = () => {
		setRandomQuote(quotes[getIndexRandom(quotes)]);
		setRandomColor(color[getIndexRandom(color)]);
	};
	//aqui se ecuentra mis componentes y sus props
	return (
		<div style={bacgroudObject} className="App">
			<QuotesBox
				randomQuote={randomQuote}
				randomColor={randomColor}
				getRandomAll={getRandomAll}
			/>
		</div>
	);
}

export default App;
