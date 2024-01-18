import React from 'react';
import htmlIcon from "./img/html-5.png";
import cssIcon from "./img/css-3.png";
import jsIcon from "./img/js.png";
import nodejsIcon from "./img/nodejs.png";
import reactIcon from "./img/react.png";
import pythonIcon from "./img/py.png";
import ScrollDownLine from './ScrollDownLine';


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-text-div'>
                    <h1 className='header-text'>Hey I'm <span className='header-name'>Linus</span></h1>
                </div>
                <ScrollDownLine />
                <div className='header-icon-images'>
                    <div className='header-flex-timeline-icons'>
                        <img src={htmlIcon} alt="HTML" className='header-lang-icon html-icon' />
                        <img src={cssIcon} alt="CSS" className='header-lang-icon css-icon' />
                        <img src={pythonIcon} alt="Python" className='header-lang-icon python-icon' />
                        <img src={jsIcon} alt="JavaScript" className='header-lang-icon js-icon' />
                        <img src={nodejsIcon} alt="Node.js" className='header-lang-icon node-icon' />
                        <img src={reactIcon} alt="React" className='header-lang-icon react-icon' />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;