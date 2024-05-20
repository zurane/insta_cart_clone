import React from "react";
import Store from "../components/Store";
import PicknPayLogo from "../assets/PicknPayLogo.svg";
import LiquorBoys from "../assets/liquor-boys.png";
import Makro from "../assets/makro-icon-logo.png";

export default function Wholesale() {

    return (
        <div className="stores">
        <div className="card">
            <Store logoUrl={PicknPayLogo} storeName={"PicknPay"} deliveryEta={"20mi"} deliveryTime={"Delivery at 10:00am"} categories={"Wholesale"} productType={"Retail"} />

        </div>
        <div className="card">
            <Store logoUrl={LiquorBoys} storeName={"Liquor Boys"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Alcohol - Wholesale"} productType={"Beverages"} />

        </div>
        <div className="card">
            <Store logoUrl={Makro} storeName={"Makro"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Groceries - Wholesale"} productType={"Groceries"} />

        </div>
    </div> )
}