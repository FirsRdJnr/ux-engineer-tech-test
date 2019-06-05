import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrossSell from '../components/Header/CrossSell';
import Header from '../components/Header/Header';
import Heropromo from '../components/Promos/Heropromo';
import PromoList from '../components/Promos/PromoList';
import PromoDetails from '../components/Promos/PromoDetails';
import Games from '../components/Games';
import './App.scss';

function Index() {
    return (
        <div>
            <h2>Home</h2>
            <Heropromo />
            <Games />
        </div>
    )
}
  
function AllGames() {
    return (
        <div>
            <h2>All Games</h2>
            <Games />
        </div>
    )
}

function Promos() {
    return (
        <div>
            <h2>Promotions</h2>
            <Heropromo />
            <PromoList />
        </div>
    )
}

function App() {
    return (
        <Router>
            <CrossSell />
            <Header />

            <Route exact path="/" component={Index} />
            <Route path="/all-games" component={AllGames} />
            <Route exact path="/promotions" component={Promos} />
            <Route path="/promotions/:id" component={PromoDetails} />
        </Router>
    );
}

var mountNode = document.getElementById("root");
ReactDOM.render(<App/>, mountNode);