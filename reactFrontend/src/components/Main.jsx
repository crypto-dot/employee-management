import React from 'react'
import ListEmployee from "./ListEmployee";
import Footer from './Footer';
import "../styles/Main.scss";

const Main = () => {
    return (
        <div className='main'>
            <ListEmployee />
            <Footer />
        </div>
    )
}

export default Main