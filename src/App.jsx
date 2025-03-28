import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Editor } from "./components/Editor";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [curId, setCurId] = useState(null);
  const [searchNote, setSearchNote] = useState("");

  function handleNoteChange(e) {
    setCurrentNote(e.target.value);
  }

  function handleAddNote() {
    if (currentNote.trim() !== ""){
      const newNote = { id: nanoid(), text: currentNote };
      setNotes([...notes, newNote]);
      setCurrentNote("");
    }
  }

  function handleEditNote(id) {
    const noteToEdit = notes.find(note => note.id === id);
    if (noteToEdit) {
      setCurrentNote(noteToEdit.text)
      setCurId(id)
    }
  }

  function handleSaveNote() {
    if(curId) {
      setNotes(notes.map(note =>
        note.id === curId ? {...note, text: currentNote} : note
      ));
      setCurrentNote('');
      setCurId(null);
    }
  }

  function handleDeleteNote(id) {
    setNotes(
      notes.filter(note => note.id !== id)
    )
  }

  function handleSearchChange(e) {
    setSearchNote(e.target.value);
  }

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchNote.toLowerCase())
  )

  return (
    <div className="app">
     
      <Sidebar notes={filteredNotes} 
      searchNote={searchNote}
      onAddNote={handleAddNote}  
      onEdit={handleEditNote}
      onDeleteNote={handleDeleteNote} 
      onSearchChange={handleSearchChange}/>
      <Editor text={currentNote} 
      onChangeNote={handleNoteChange} 
      onSaveNote={handleSaveNote}/>
    </div>
  );
}

export default App;
