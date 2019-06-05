import * as React from "react";

export default class PromoDetails extends React.Component {

    render() {
        const promo = this.props.location.state;

        return (
            <section>
                <img src={"https://st1.skybet.com/content/gaming/promotions/" + promo.assets.detailBackground.fileName}/>
                <img src={"https://st1.skybet.com/content/gaming/promotions/" + promo.assets.detailHeader.fileName}/>
                <h1>{promo.displayName}</h1>
                <p>{promo.subtitle} <span>{promo.endTime}</span></p>
                <div>{promo.content}</div>

            </section>

        );
    }
}
