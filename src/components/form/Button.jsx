import React from 'react';

function Button({ id, type, label, className, arhiveNoteHandler } ) {
	return <button type={type} id={id} className={`btn ${className}`} onClick={() => arhiveNoteHandler(id)}>{label}</button>
}

function DeleteButton({ id, type, label, className, onDelete }) {
	return <button type={type} id={id} className={`btn ${className}`} onClick={() => onDelete(id)}>{label}</button>;
}

export {Button, DeleteButton};