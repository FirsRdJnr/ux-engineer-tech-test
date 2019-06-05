import * as React from "react";
import './CrossSell.scss';

class CrossSell extends React.Component {
    render() {
        return (
            <div className="cross-sell">
                <div className="cross-sell__inner">
                    <a className="cross-sell__item"><img src="/cross-sell/sky-bet.png" alt="Sky Bet" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/sky-casino.png" alt="Sky Casino" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/sky-livecasino.png" alt="Sky Live Casino" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/sky-poker.png" alt="Sky Poker" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/sky-bingo.png" alt="Sky Bingo" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/super6.png" alt="Super6" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/fantasy-football.png" alt="Fantasy Football" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/SAS-white.png" alt="Soccer Saturday Six-a-Side" /></a>
                    <a className="cross-sell__item"><img src="/cross-sell/pick-7-itv.png" alt="ITV 7" /></a>
                </div>
            </div>
        );
    }
}

export default CrossSell;