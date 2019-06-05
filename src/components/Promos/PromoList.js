import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PromoDetails from './PromoDetails';
import * as PromoData from '../../data/PromoData.json';

export default class PromoList extends React.Component {

    render() {
        const PromoList = PromoData.PromoData.map((promo) =>
            <li key={promo.id} className={promo.id}>
                <img src={"/promos/" + promo.assets.detailHeader.fileName}/>
                <img src={"/promos/" + promo.assets.detailThumbnail.fileName}/>
                <img src={"/promos/" + promo.assets.detailBackground.fileName}/>
                <img src={"/promos/" + promo.assets.wideList.fileName}/>
                <p>{promo.displayName}</p>

                <Link 
                    to={{
                        pathname: "/promotions/" + promo.urlName,
                        state: promo
                    }}
                >
                    Find Out More
                </Link>
            </li>
        );

        return (
            <ul className="promo__list">
                {PromoList}
            </ul>
        );
    }
}
