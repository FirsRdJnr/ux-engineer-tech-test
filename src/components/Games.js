import * as React from "react";
import * as GameData from '../data/GameData.json';
import InGame from './InGame/InGame';


export default class Games extends React.Component {
    constructor() {
        super();
        this.state = {
            showGame: false
        };
    }

    playGame() {
        this.setState({
            showGame: !this.state.showGame
        });
    }

    render() {
        const GameName = GameData.GameData.map((game) =>
            <li key={game.id} className={game.id}>
                <img src={'/games/' + game.assets.tileoneoneretina.filename} />
                <p>{game.name}</p>
                <ul>
                    <li>{game.attributes.type}</li>
                    <li>{game.attributes.exclusiveUntil}</li>
                    <li>{game.attributes.newUntil}</li>
                </ul>
                <div><a href={game.slug}>info</a></div>
                <div><a onClick={this.playGame.bind(this)}>Play {game.name}</a></div>
            </li>
        );

        return (
            <div>
                <h3>Games</h3>
                <ul className="game-list">
                    {GameName}
                </ul>

                {this.state.showGame ?
                    <InGame
                        closeGame={this.playGame.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}
