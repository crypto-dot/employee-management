import React from 'react'
import "../styles/Header.scss";
const Header = () => {
    return (
        <header className='header__main'>
            <h1 className='h1 h1__header'>Employee Management Application</h1>
            <nav>
                <button className='button__logout'>
                    Log Out
                </button>
            </nav>
        </header>
    )
}

export default Header