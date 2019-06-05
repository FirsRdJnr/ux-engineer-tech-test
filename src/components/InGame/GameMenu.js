import * as React from "react";
import './GameMenu.scss';

export default class GameMenu extends React.Component {

    render() {

        return (
            <div className="menu">
                <ul className="menu__content">
                    <li 
                        data-tab="menu__open"
                        onClick={this.props.action}
                        className="menu__item"
                    >
                        <span className="menu__link">
                            <svg viewBox="0 0 24 24"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>
                            <span className="menu__text">Menu</span>
                        </span>

                    </li>
                    <li data-tab="menu__my-arcade" className="menu__item">
                        <span className="menu__link">
                        <svg viewBox="0 0 512 512"><path d="M77.17 460.77H153l-.27-153.57c0-12.8 12.8-25.6 25.6-25.6H332.7c12.8 0 25.6 12.8 25.6 25.6l1.48 153.57h76.66V257.25L257.57 61.66 77.17 257.25v203.52zm-51.57 26.9V240.58c0-6.54 2.5-12.83 6.99-17.58L235.62 8.02A25.608 25.608 0 0 1 254.23 0h3.53c7.04 0 13.78 2.9 18.61 8.02L479.41 223a25.589 25.589 0 0 1 6.99 17.58V486.4c0 12.8-12.8 25.6-25.6 25.6H333.22c-12.8 0-23.94-12.8-23.94-25.6V332.8H205.16v153.6c0 12.8-11.32 25.6-24.12 25.6H51.2c-12.8 0-25.6-12.8-25.6-24.33z"/></svg>
                            <span className="menu__text">Home</span>
                        </span>
                    </li>
                    <li data-tab="menu__info" className="menu__item">
                        <span className="menu__link">
                        <svg viewBox="0 0 512 512"><path d="M254.9 180.63c14.08 0 25.49-11.41 25.49-25.49 0-14.08-11.41-25.49-25.49-25.49-14.08 0-25.49 11.41-25.49 25.49 0 14.08 11.41 25.49 25.49 25.49zm0 50.98c-14.08 0-25.49 11.41-25.49 25.49v101.96c0 14.08 11.41 25.49 25.49 25.49 14.08 0 25.49-11.41 25.49-25.49V257.1c0-14.08-11.41-25.49-25.49-25.49zm0 229.41c-112.62 0-203.92-91.3-203.92-203.92S142.28 53.18 254.9 53.18s203.92 91.3 203.92 203.92-91.3 203.92-203.92 203.92zm0 50.98c140.78 0 254.9-114.12 254.9-254.9S395.68 2.2 254.9 2.2 0 116.32 0 257.1 114.12 512 254.9 512z"/></svg>
                            <span className="menu__text">Game details</span>
                        </span>
                    </li>
                    <li data-tab="menu__exit" className="menu__item" onClick={this.props.closeGame}>
                        <span className="menu__link">
                            <svg viewBox="0 0 512 512"><path d="M443.6 387.1L312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"/></svg>
                            <span className="menu__text">Exit Game</span>
                        </span>
                    </li>
                </ul>
            </div>

        );
    }
}


