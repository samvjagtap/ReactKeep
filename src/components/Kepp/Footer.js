import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='p-5'>
                <p className='text-center'>copyright @ {year}</p>
            </footer>
        </>
    )
}

export default Footer