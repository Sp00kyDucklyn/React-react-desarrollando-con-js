import React from 'react';
import './Header.css';

function Header(){
    /* We can only return one HTML element, 
        so if we want to return multiple elements 
        we need to wrap them in one.
        In this case we are wrapping the image in a header tag.
    */
    return <header className='header'>
        <img src="/img/header.png" alt="header"/>
    </header>

    
}

// Export the component so you can use it in other files     
export default Header;