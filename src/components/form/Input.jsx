import React from 'react';

function Input({ type, placeholder, id, onChange, readOnly, value }) {
	return <input
		className="form-control me-2"
		type={type}
		onChange={onChange}
		placeholder={placeholder}
		id={id}
		value={value}
		readOnly={readOnly}
	/>
}

function InputFloatingLabel({type, placeholder, id, label, valueBody}) {
	return (
			<div className="form-floating mb-3">
				<input type={type} className="form-control" id={id} value={valueBody} placeholder={placeholder}/>
				<label htmlFor={id}>{label}</label>
			</div>
	)
}

function TextArea({id, label, placeholder, onBodyChange, valueBody}) {
	return (
		<div className="form-floating">
			<textarea
				className="form-control my-2"
				placeholder={placeholder}
				id={id}
				value={valueBody}
				onChange={onBodyChange}
				style={{height: '100px'}}>
			</textarea>
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

export {Input, InputFloatingLabel, TextArea}