import React, { useContext } from 'react'
import ComC from './ComC'
import {firstname, lastname} from '../App'

const ComB = () => {
    const fname = useContext(firstname);
    const lname = useContext(lastname);
    return (
        <>
            <h1>{fname} {lname}</h1>
            <ComC/>
        </>
    )
}

export default ComB