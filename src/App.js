import { useState } from "react";
import axios from "axios";

import TextInput from "./components/TextInput";
function App() {
	const [url, setUrl] = useState("");

	function clickHandler() {
		axios
			.post("http://localhost:4000/api/shorten", {
				origUrl: url,
			})
			.then((res) => {
				console.log("Response of API: ", res);
			})
			.catch((error) => {
				console.log("Facing error: ", error.message);
			});
		console.log("Clicked", url);
	}

	function changeHandler(e) {
		setUrl(e.target.value);
	}

	return (
		<div className="container">
			<h1 className="title">URL Shortening</h1>
			{/* Make textinput a components */}
			<TextInput
				label="Shorten URL: "
				name="inputUrl"
				changeHandler={changeHandler}
				clickHandler={clickHandler}
				buttonName="Go!"
			/>
		</div>
	);
}

export default App;
