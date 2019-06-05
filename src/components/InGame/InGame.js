import * as React from "react";
import GameAccount from './GameAccount';
import GameMenu from './GameMenu';
import GamePlay from './GamePlay';
import './InGame.scss';

export default class InGame extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenuBind = this.toggleMenu.bind(this);
        this.state = {
            openMenu: false
        };
    }

    toggleMenu() {
        this.setState({
          openMenu: !this.state.openMenu
        });
    }

    render() {
        return (
            <section className={ this.state.openMenu ? "in-game open" : "in-game" }>
                <GameMenu 
                    closeGame={this.props.closeGame}
                    action={this.toggleMenuBind}
                />
                <GameAccount />
                <GamePlay />

            </section>

        );
    }
}
