import React from 'react';

function Alert({ message }) {
	return (
		<div className="alert alert-warning" role="alert">
			<h6 className="text-center">{ message }</h6>
		</div>
	)
}

export default Alert;