import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return(
            <header className='header'>
                <div className='container'>
                    <div className='logo'>
                        <p className='logoShadow'>MinionStore</p>
                        <p className='logoUp'>MinionStore</p>
                    </div>
                    <div className='navButtons'>
                    </div>
                
                </div>
            </header>
        )
    }
}
