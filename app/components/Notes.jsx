import React from 'react';
import Note from './Note.jsx';

export default ({ notes }) => {
    return (
        <ul>
            {notes.map(note =>
                <li key={note.id}>
                    {note.task}
                </li>
            )}
        </ul>
    )
}