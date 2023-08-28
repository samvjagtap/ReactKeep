import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faNoteSticky, faBook, faTrash } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-dark" style={{backgroundColor: 'rgb(211, 184, 10)', marginBottom: '30px'}}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <FontAwesomeIcon icon={faBook} />
                        {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" /> */}
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header