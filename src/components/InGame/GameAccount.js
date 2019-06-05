import * as React from "react";
import './GameAccount.scss';

export default class GameAccount extends React.Component {
    constructor() {
        super()
        this.state = {currentTime: true};
    }

    componentWillUnmount() {
        clearInterval(this.setTimeout);
    }

    render() {
        const getTime = new Date();
        const currentTime = getTime.toLocaleTimeString();

        setTimeout(() => {
            this.setState({ currentTime})
        }, 1000)

        return (
            <div className="menu__account">
                <div className="menu__account__logo">
                    <img src="./sky-arcade-logo-ingame.png" alt="" />
                </div>
                <div className="menu__account__time">
                    {currentTime}
                </div>
                <div className="menu__account__sound">
                    <div className="icon icon--soundOn">
                        <svg viewBox="0 0 2048 2048"><path d="M1264.4 1419.4c-37.6-43.8-32.4-109.6 11.4-147.1 69.9-60.1 113.9-148.4 113.9-247.6 0-101.2-45.5-190.8-117.6-251-44.2-36.7-50.4-102.5-13.5-146.8 36.8-44.4 102.6-50.3 146.9-13.5 117.7 97.8 192.8 246.2 192.7 411.3.1 162.2-72.4 308.2-186.8 406-19.7 16.9-43.8 25.1-67.8 25.1-29.3 0-58.6-12.3-79.2-36.4zm342.9 299.5c-41.2-40.2-42.1-106.2-1.7-147.4 133.1-136.6 214.8-322.3 214.8-528 0-206.5-82.2-392.6-216.1-529.3-40.2-41.2-39.6-107.2 1.5-147.5 41.1-40.4 107.1-39.7 147.5 1.4 170.4 173.8 275.9 412.8 275.8 675.5.1 261.7-104.5 500.1-274.1 673.6-20.5 21-47.5 31.6-74.7 31.4-26.4-.1-52.7-9.9-73-29.7zM981 201.6l-550.5 562H3V1291h409.1l567.3 556.1c41.7 45 75.8 32 75.8-29V229.9c.1-61.4-33.4-74.1-74.2-28.3z"></path></svg>
                        <span className="icon__text">Sound</span>
                    </div>
                </div>
                <div className="menu__account__account">
                    <div className="icon icon--account">
                        <svg viewBox="0 0 2048 2048"><path d="M1488.7 465.3c0 256.9-208 465.3-464.6 465.3-256.7 0-464.7-208.3-464.7-465.3C559.3 208.4 767.3 0 1024 0c256.7 0 464.7 208.4 464.7 465.3zM1959 2009c-5.2-559.6-421.7-974.6-935.4-974.6C501.8 1034 93.4 1441 89 2009c0 21 17.6 39 39 39h1791.9c21.5 0 39.1-18 39.1-39z"></path></svg>
                        <span className="icon__text">Account</span>
                    </div>
                </div>
            </div>

        );
    }
}


