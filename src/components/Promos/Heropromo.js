import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as PromoData from '../../data/PromoData.json';

export default class HeroPromo extends React.Component {

    render() {

        const HeroPromo = PromoData.PromoData.map((promo) => {
            if (promo.featured === true) {
                return (
                    <div key={promo.id} className={promo.id}>
                        <img src={"/promos/" + promo.assets.detailBackground.fileName}/>
                        <img src={"/promos/" + promo.assets.detailHeader.fileName}/>
                        <h1>{promo.displayName}</h1>
                        <p>{promo.subtitle}</p>
                        <Link 
                            to={{
                                pathname: "/promotions/" + promo.urlName,
                                state: promo
                            }}
                        >
                            Find Out More
                        </Link>
                    </div>
                )
            }
        });

        return (
            <section className="promo__hero">
                {HeroPromo}
            </section>
        );
    }
}
