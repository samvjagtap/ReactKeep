import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Note = (props) => {
    const onDeleteBtn = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className='col-xl-3 col-lg-4 col-12'>
                <div class="note p-2">
                    <div class="form-group text-dark">
                        <p>{props.title}</p>
                    </div>
                    <div class="form-group text-dark">
                        <p>{props.content}</p>
                    </div>
                    <button onClick={onDeleteBtn} class="btn btn-default"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </>
    )
}

export default Note