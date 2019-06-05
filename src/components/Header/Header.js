import * as React from 'react';
import Brand from './Brand';
import Nav from './Nav';
import User from './User';

import './Header.scss';

export default class header extends React.Component {

    render() {
        return (
            <header>
                <section className="masthead">
                    <Brand />
                    <Nav />
                    <User />
                </section>
            </header>
        );
    }
}
