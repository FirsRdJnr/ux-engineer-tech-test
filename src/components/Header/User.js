import React from 'react';
import './User.scss';

export default class User extends React.Component {

    render() {
        return (
            <section className="masthead--my-account">
                <div>
                    <ul className="account-bar__account-links">
                        <li>
                            <a className="notificationIcon__wrapper" href="#" rel="internal">
                                <div className="skycon skycon--bell">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1696.3,1386V786.1h-0.7c-13.6-300.4-224.4-549.5-506.1-620.8C1189.4,74,1115.3,0,1024,0S858.6,74,858.5,165.3c-281.6,71.3-492.4,320.3-506.1,620.8h-0.7V1386c-114.2,0-206.9,92.6-206.9,206.9c0,114.2,92.6,206.9,206.9,206.9h1344.6c114.2,0,206.9-92.6,206.9-206.9C1903.2,1478.6,1810.6,1386,1696.3,1386z"></path><path d="M1024,2048c114.2,0,206.9-92.6,206.9-206.9H817.1C817.1,1955.4,909.8,2048,1024,2048z"></path></svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="account-bar__link-button t__deposit hide-mobile">Deposit</a>
                        </li>
                        <li>
                            <a href="#" className="account-bar__link t__balance">
                                {/* {Balance} */}
                            </a>
                        </li>
                        <li>
                            <a href="#" className="account-bar__link-button t__my-account">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}


