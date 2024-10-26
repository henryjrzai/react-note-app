import React from 'react';
import NoteItem from "./NoteItem.jsx";

function NoteList({ notes, onDelete, arhiveNoteHandler }) {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-4">
			{
				notes.map((note) => (
					<NoteItem
						key={note.id}
						onDelete={onDelete}
						arhiveNoteHandler={arhiveNoteHandler}
						{...note} />
				))
			}
		</div>
	)
}

export default NoteList;