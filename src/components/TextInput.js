import React from "react";

const TextInput = ({
	label,
	name,
	changeHandler,
	clickHandler,
	buttonName,
}) => {
	return (
		<div className="textInputContainer">
			<label>{label}</label>
			<input name={name} type="text" onChange={(e) => changeHandler(e)} />
			<button type="button" onClick={clickHandler}>
				{buttonName}
			</button>
		</div>
	);
};

export default TextInput;
