import React from "react";
import Store from "../components/Store";
import Sportscene from "../assets/sportscene_store_logo_8850bbe605.png";
import Woolworths from "../assets/woolworths.svg";
import Zara from "../assets/ZARA.png";

export default function Retail() {

    return (
        <div className="stores">
            <div className="card">
                <Store logoUrl={Sportscene} storeName={"Sportscene"} deliveryEta={"20mi"} deliveryTime={"Delivery at 10:00am"} categories={"Retail - Sportswear"} productType={"Sportwear"} />

            </div>
            <div className="card">
                <Store logoUrl={Woolworths} storeName={"Woolworths"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Retail- High fashion"} productType={"Clothing"} />

            </div>
            <div className="card">
                <Store logoUrl={Zara} storeName={"Zara"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Retail - Fashion"} productType={"Fashion"} />

            </div>
        </div>
    )
}