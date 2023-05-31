import { useState } from "react";
import axios from "axios";
import TextInput from "./components/TextInput";
import ResultBox from "./components/ResultBox";

function App() {
	const [url, setUrl] = useState("");
	// Array of short URLs
	const [shortUrls, setShortUrls] = useState([]);

	function clickHandler() {
		axios
			.post(`${process.env.REACT_APP_BASE_URL}/shorten`, {
				origUrl: url,
			})
			.then((res) => {
				setShortUrls([...shortUrls, res.data["shortUrl"]]);
			})
			.catch((error) => {
				console.log("Facing error: ", error.message);
			});
	}

	function changeHandler(e) {
		setUrl(e.target.value);
	}

	return (
		<div className="container">
			<h1 className="title">Enter URL to shorten</h1>
			{/* Make textinput a components */}
			<TextInput
				name="inputUrl"
				changeHandler={changeHandler}
				clickHandler={clickHandler}
				buttonName="SHORT IT!"
				placeholder="https://www.example.com"
			/>
			{/* Check if array is not empty */}
			{shortUrls.length > 0
				? shortUrls.map((shortUrl, index) => (
						<div key={index} className="cardContainer">
							<ResultBox shortUrl={shortUrl} />
						</div>
				  ))
				: ""}
		</div>
	);
}

export default App;
