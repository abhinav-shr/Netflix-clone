import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            setShow(true);
        }else {
            setShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])





    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img className='nav_logo'
                src="https://pngimg.com/uploads/netflix/netflix_PNG26.png" alt="logo" />

                <img className='nav_avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            </div>
            

        </div>
    )
}

export default Nav
