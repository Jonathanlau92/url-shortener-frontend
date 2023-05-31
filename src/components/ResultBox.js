import React from "react";

const ResultBox = ({ shortUrl }) => {
	return (
		<div className="card">
			<h2 style={{ margin: "10px" }} className="title">
				Generated Short Link:
			</h2>
			<p>Save the link or click it to open it!</p>
			<a href={shortUrl} target="_blank" rel="noreferrer">
				{shortUrl}
			</a>
		</div>
	);
};

export default ResultBox;
