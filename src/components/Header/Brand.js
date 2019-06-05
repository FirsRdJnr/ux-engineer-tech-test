import React from 'react';
import './Brand.scss';

export default class Brand extends React.Component {

    render() {
        return (
            <div className="masthead--logo">
                <a href="/">
                    <img src="sky-arcade-logo.png" alt="Sky Arcade Logo" />
                </a>
            </div>
        );
    }
}
