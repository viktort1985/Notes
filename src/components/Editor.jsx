import React from "react";



export function Editor({id, text, onChangeNote, onSaveNote}) {
    return(
        <div className="editor">
            <h2>Title</h2>
            <textarea value={text} 
            onChange={e => {onChangeNote(e)}} 
            onBlur={onSaveNote}></textarea>
        </div>
    )
}