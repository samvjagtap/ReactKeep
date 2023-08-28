import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Createnote from './Createnote'
import Note from './Note'

const Kepp = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((oldData) => {
            return [...oldData, note]
        })
    }
    const onDeleteBtn = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((val, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <Header />
            <Createnote
                passNote={addNote}
            />
            <div class="container">
                <div className='row'>
                    {
                        addItem.map((val, index) => {
                            return <Note 
                                id={index}
                                key={index}
                                title={val.title}
                                content={val.content}
                                deleteItem={onDeleteBtn}
                            />
                        })
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Kepp