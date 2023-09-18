import React, {useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial)

      // Get All notes
      const getNotes = async () =>{
        //API CAll
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmODU0OGJiNTI2NDdkZjVhZDk2NGVlIn0sImlhdCI6MTY5NDA2Mzc0M30.70F_g9G44cmuPgi3z4j3Vgo193H6GwD2_oCMqyK3kFI"
          },
        });
        const json = await response.json(); 
        setNotes(json)
      }

      // Add a note
      const addNote = async (title, description, tag) =>{
        //API CAll
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmODU0OGJiNTI2NDdkZjVhZDk2NGVlIn0sImlhdCI6MTY5NDA2Mzc0M30.70F_g9G44cmuPgi3z4j3Vgo193H6GwD2_oCMqyK3kFI"
          },
          body: JSON.stringify({title, description, tag})
        });

        const note = await response.json();
        setNotes(notes.concat(note)) 
      }

      // Delete a note
      const deleteNote = async (id) =>{
      // API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmODU0OGJiNTI2NDdkZjVhZDk2NGVlIn0sImlhdCI6MTY5NDA2Mzc0M30.70F_g9G44cmuPgi3z4j3Vgo193H6GwD2_oCMqyK3kFI"
        },
      });
      const json = await response.json();
      
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a note
      const editNote = async (id, title, description, tag) =>{
        //API CAll
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmODU0OGJiNTI2NDdkZjVhZDk2NGVlIn0sImlhdCI6MTY5NDA2Mzc0M30.70F_g9G44cmuPgi3z4j3Vgo193H6GwD2_oCMqyK3kFI"
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        
        let newNotes = JSON.parse(JSON.stringify(notes))
        //Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children} 
        </noteContext.Provider>
    )
}

export default NoteState;