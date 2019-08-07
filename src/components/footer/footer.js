import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <div className='footerContent'>
                    <div className='socialMedia'></div>
                    <div className='copyright'>Copyright © 2019 - All rights reserved</div>
                </div>
            </footer>
        )
    }
}