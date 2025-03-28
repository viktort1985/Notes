import React from "react";



export function Sidebar({notes, searchNote, onAddNote, onEdit, onDeleteNote, onSearchChange}) {


    return(
        <div className="sidebar">
            <h2>Notes</h2>
            <button onClick={onAddNote}>Add note</button>
            <input  type="text"
                    placeholder="search for a note" 
                    value={searchNote}
                    onChange={onSearchChange}
            />
            <ul>
                {notes.map((note) => {
                    return <li key={note.id}>
                        <span   
                        
                        id={note.id}
                        onClick={() => onEdit(note.id)}>{(note.text).slice(0, 10) + '...'}
                        </span>
                        <button onClick={() => onDeleteNote(note.id)}
                                aria-label="Delete note">delete</button>
                    </li>;
                })}
            </ul>
            
        </div>
    )
}