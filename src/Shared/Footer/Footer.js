import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer>
            <div className='footer_StyledCredit'>
                <div>
                    <a href='https://github.com/Phyrol/portfolio' target={"_blank"} rel='noreferrer'>
                        Built by Bradley Potzka
                    </a>
                </div>
                <div>
                    <a href='https://brittanychiang.com/' target={"_blank"} rel='noreferrer'>
                        Design Inspired by Brittany Chiang
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;