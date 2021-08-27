import React, { useState } from 'react';


function NavBar() {



    return(
        <div>
                <nav>
                    <div id='nav-links' >
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/blog'>Blog</a>
                        <a href='/contact'>Contact</a>
                    </div>
                </nav>
            </div>
        );
}


export default NavBar;