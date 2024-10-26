import React from 'react';
import {Button, DeleteButton} from "../components/form/Button.jsx";
import { showFormattedDate } from "../utils/index.js";

function NoteItem({ id, title, body, createdAt, archived, onDelete, arhiveNoteHandler  }) {
	return (
		<div className="col">
			<div className="card" style={{ width: '18rem'}}>
				<div className="card-body">
					<h5 className="card-title">{ title }</h5>
					<h6 className="card-subtitle mb-2 text-muted">{showFormattedDate(createdAt) }</h6>
					<p className="card-text">{ body }</p>
					<Button
						id={id}
						type="button"
						className="ms-2 btn-outline-secondary"
						arhiveNoteHandler={arhiveNoteHandler}
						label={archived ? "Pindahkan" : "Arsipkan"} />
					<DeleteButton
						id={id}
						type="button"
						className="btn-outline-danger"
						onDelete={onDelete}
						label="Hapus"
						/>
				</div>
			</div>
		</div>
	)
}

export default NoteItem;