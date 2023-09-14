import React, {useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "64fabd5b7dfec9bcc5b84e35",
          "user": "64f8548bb52647df5ad964ee",
          "title": "My Title",
          "description": "Please try to wake up early",
          "tag": "personal",
          "date": "2023-09-08T06:21:15.783Z",
          "__v": 0
        },
        {
          "_id": "64fabd5e7dfec9bcc5b84e37",
          "user": "64f8548bb52647df5ad964ee",
          "title": "My Title",
          "description": "Please try to wake up early",
          "tag": "personal",
          "date": "2023-09-08T06:21:18.963Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

      // Add a note
      const addNote = (title, description, tag) =>{
        console.log("adding a new note")
        const note = {
          "_id": "64fabd5e7dfec9bcc5b84e37",
          "user": "64f8548bb52647df5ad964ee",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-09-08T06:21:18.963Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a note
      const deleteNote = () =>{
        
      }
      // Edit a note
      const editNote = () =>{
        
      }
    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children} 
        </noteContext.Provider>
    )
}

export default NoteState;