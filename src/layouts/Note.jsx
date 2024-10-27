import React from 'react';
import { getInitialData } from '../utils/index.js';
import NoteList from '../layouts/NoteList.jsx';
import FormAddNote from "./FormAddNote.jsx";
import Alert from "../components/Alert.jsx";

class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
			title: '',
			body: '',
			maxTitleChar: 50,
			remainingTitleChar: 50
		}

		this.titleEventHandler = this.titleEventHandler.bind(this);
		this.bodyEventHandler = this.bodyEventHandler.bind(this);
		this.addNote = this.addNote.bind(this);
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.arhiveNoteHandler = this.arhiveNoteHandler.bind(this);
	}

	titleEventHandler(e) {
		const title = e.target.value;
		const remainingTitleChar = this.state.maxTitleChar - title.length;

		if (remainingTitleChar >= 0) {
			this.setState({
				title: title,
				remainingTitleChar: remainingTitleChar
			});
		}
	}

	bodyEventHandler(e) {
		this.setState({ body: e.target.value });
	}

	addNote(event) {
		event.preventDefault()
		const { title, body } = this.state;
		const newNote = {
			id: +new Date(),
			title: title,
			body: body,
			createdAt: new Date().toISOString(),
			archived: false
		};

		this.setState({
			notes: [...this.state.notes, newNote],
			title: '',
			body: '',
			remainingTitleChar: this.state.maxTitleChar
		});

	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter(note => note.id !== id);
		this.setState({
			notes : notes
		});
	}

	arhiveNoteHandler(id) {
		const notes = this.state.notes.map(note => {
			if (note.id === id) {
				note.archived = !note.archived;
			}
			return note;
		});
		console.log(notes)
		this.setState({ notes: notes });
	}

	render() {

		const activeNotes = this.state.notes.filter(note => note.archived === false);
		const archivedNotes = this.state.notes.filter(note=> note.archived === true);

		return (
			<div className="container">
				<FormAddNote
					title={this.state.title}
					body={this.state.body}
					maxTitleChar={this.state.maxTitleChar}
					remainingTitleChar={this.state.remainingTitleChar}
					onTitleChange={this.titleEventHandler}
					onBodyChange={this.bodyEventHandler}
					submit={this.addNote}
				/>
				<div className="mt-5">
					<h5>📝 Daftar Catatan Aktif</h5>
					{ activeNotes.length >=1
						? <NoteList
						notes={activeNotes}
						onDelete={this.onDeleteHandler}
						arhiveNoteHandler = {this.arhiveNoteHandler} />
						: <Alert message="Tidak ada catatan 😙, silahkan tambahkan catatan baru 😊"/>
					}
				</div>
				<div className="mt-5">
					<h5>📝 Daftar Catatan Arsip</h5>
					{
						archivedNotes.length >= 1
							? <NoteList
								notes={archivedNotes}
								rhiveNoteHandler={this.arhiveNoteHandler}
								onDelete={this.onDeleteHandler}/>
							: <Alert message="Tidak ada catatan 😙, silahkan tambahkan catatan baru 😊"/>
					}
				</div>
			</div>
		)
	}
}

export default Note;