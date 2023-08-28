import React from 'react'
import {firstname, lastname} from '../App'

const ComC = () => {
  return (
    <>
        <firstname.Consumer>
                {
                    (fname) => {
                        return (
                            <lastname.Consumer>
                                {
                                    (lname) => {
                                        return <h1>Hi in C component {fname} {lname}</h1>;
                                    }
                                }
                            </lastname.Consumer>
                        )
                    }
                }
        </firstname.Consumer>
    </>
  )
}

export default ComC