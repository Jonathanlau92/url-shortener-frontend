import React from "react";

const TextInput = ({
	label,
	name,
	changeHandler,
	clickHandler,
	buttonName,
	placeholder,
}) => {
	return (
		<div className="textInputContainer">
			<label>{label}</label>
			<input
				id="inputField"
				name={name}
				type="text"
				onChange={(e) => changeHandler(e)}
				placeholder={placeholder}
			/>
			<button type="button" onClick={clickHandler}>
				{buttonName}
			</button>
		</div>
	);
};

export default TextInput;
