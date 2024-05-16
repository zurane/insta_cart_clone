import React from "react";
import Store from "../components/Store";
import PicknPayLogo from "../assets/PicknPayLogo.svg";
import Woolworths from "../assets/woolworths.svg";
import Checkers from "../assets/checkers-logo.svg";

export default function Groceries() {

    return (
        <ul className="stores">
            <li className="card">
                <Store logoUrl={PicknPayLogo} storeName={"PicknPay"} deliveryEta={"60mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Groceries - FMGC"} productType={"Groceries"} />
            </li>
            <li className="card">
                <Store logoUrl={Woolworths} storeName={"Woolworths"} deliveryEta={"30mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Groceries - FMGC"} productType={"Groceries"} />
            </li>
            <li className="card">
                <Store logoUrl={Checkers} storeName={"Checkers"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Groceries - FMGC"} productType={"Groceries"} />

            </li>
        </ul>
    )
}