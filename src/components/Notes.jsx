import React, { useState } from "react";
import "../App.css";
import { nanoid } from "nanoid";

export function Notes() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [currentId, setCurrentId] = useState("");

  function handleNoteChange(event) {
    setCurrentNote(event.target.value);
  }

  function handleAddNote() {
    if (currentNote !== "") {
      setNotes([...notes, { id: nanoid(), text: currentNote, isEdit: false }]);
      setCurrentNote("");
    }
  }

  function handleNoteEdit(event, id) {
	setCurrentId(id)
    setCurrentNote(
      notes.map((note) => {
		  console.log(note.id, id)

        if (note.id === id) {
          note.text = event.target.value;
        }
        return note.text;
      })
    );
  }

  function toggleMode(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.isEdit = !note.isEdit;
        }
        return note;
      })
    );
  }

//   function submitEditedNote(editedId) {
//     setNotes(
//       notes.map((note) => {
//         if (note.id === editedId) {
//           note.text = currentNote;
//         }
//         return note;
//       })
//     );
//     setCurrentNote("");
//   }

  return (
    <div className="App">
      <div className="sidebar">
        <ul>
          {notes.map((note, index) => (
            <li key={note.id}>
              {index + 1 + ". " + note.text.slice(0, 10) + "..."}
              <button
                className="edit-button"
                onClick={(event) => handleNoteEdit(currentId, event)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
        <button className="add-button" onClick={handleAddNote}>
          Add note
        </button>
      </div>
      <div className="main">
        <textarea
          value={currentNote}
          onChange={handleNoteChange}
          placeholder="Enter a note..."
        />
        <button >Save</button>
      </div>
    </div>
  );
}
