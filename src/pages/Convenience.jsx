import React from "react";
import Store from "../components/Store";
import Game from "../assets/game-logo.png";
import LeroyMerlin from "../assets/leroy-merlin.svg";
import Makro from "../assets/makro-icon-logo.png";

export default function Convenience() {
    return (
        <ul className="stores">
            <li className="card">
                <Store
                    logoUrl={Game}
                    storeName={"Game store"}
                    deliveryEta={"20mi"}
                    deliveryTime={"Delivery at 12:00pm"}
                    categories={"Electronics - Equipment"}
                    productType={"Convenience"}
                />
            </li>
            <li className="card">
                <Store
                    logoUrl={LeroyMerlin}
                    storeName={"Leroy Merlin"}
                    deliveryEta={"15mi"}
                    deliveryTime={"Delivery at 08:00am"}
                    categories={"Electronics - Household"}
                    productType={"Appliances"}
                />
            </li>
            <li className="card">
                <Store
                    logoUrl={Makro}
                    storeName={"Makro"}
                    deliveryEta={"15mi"}
                    deliveryTime={"Delivery at 12:00pm"}
                    categories={"Electronics - Wholesale"}
                    productType={"Wholesale"}
                />
            </li>
        </ul>
    );
}
