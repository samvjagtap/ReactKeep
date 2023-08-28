import React from 'react'
import { useState } from 'react'

const Createnote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const inputEvent = (event) => {
        // const value = event.target.value
        // const name = event.target.name
        const { name, value } = event.target
        setNote((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });
    }

    return (
        <>
            <div class="note note_box p-2 mb-5">
                <div class="form-group text-dark p-2">
                    <input type="text" id="title" name='title' value={note.title} onChange={inputEvent} placeholder="Enter Title" />
                </div>
                <div class="form-group text-dark p-2">
                    <textarea type="text" id="note" name='content' value={note.content} onChange={inputEvent} placeholder='Enter Note'></textarea>
                </div>
                <button onClick={addEvent} class="btn btn-default">+</button>
            </div>
        </>
    )
}

export default Createnote