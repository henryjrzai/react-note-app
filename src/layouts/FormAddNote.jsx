import React from 'react';
import { Input, TextArea } from "../components/form/Input.jsx";
import {Button} from "../components/form/Button.jsx";

class FormAddNote extends React.Component {
	constructor(props) {
		super(props);
		this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
		this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
	}

	onTitleEventHandler(e) {
		this.props.onTitleChange(e);
	}

	onBodyEventHandler(e) {
		this.props.onBodyChange(e);
	}

	render() {
		return (
			<div className="container mt-4">
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-5">
						<h2>📝 Buat catatan baru</h2>
						<form onSubmit={this.props.submit}>
							<span className="float-end">
								Sisa karakter: {this.props.remainingTitleChar}
							</span>
							<Input
								id="title"
								type="text"
								placeholder="Judul"
								label="Judul"
								value={this.props.title}
								onChange={this.onTitleEventHandler}
								readOnly={this.props.remainingTitleChar <= 0}
							/>
							<TextArea
								id="body"
								placeholder="Tulis catatan kamu di sini . . ."
								valueBody={this.props.body}
								onBodyChange={this.onBodyEventHandler}
								label="Catatan"
							/>
							<Button
								id="submit"
								type="submit"
								className="btn-primary w-100"
								label="Submit"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default FormAddNote;