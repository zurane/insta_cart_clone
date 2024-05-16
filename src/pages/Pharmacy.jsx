import React from "react";
import Store from "../components/Store";
import Clicks from "../assets/Clicks-logo.svg";
import Dischem from "../assets/DCP.JO_BIG-7415fb8e.png";
import Netcare from "../assets/Netcare.png";

export default function Pharmacy() {

    return (
        <ul className="stores">
            <li className="card">
            <Store
          logoUrl={Clicks}
          storeName={"Clicks"}
          deliveryEta={"15mi"}
          deliveryTime={" Delivery at 12:00pm"}
          categories={"Healthcare - Cosmetics"}
          productType={"Pharmacy"}
        />
            </li>
            <li className="card">
            <Store
          logoUrl={Dischem}
          storeName={"Dischem Plus"}
          deliveryEta={"15mi"}
          deliveryTime={" Delivery at 12:00pm"}
          categories={"Healthcare - Cosmetics"}
          productType={"Pharmacy"}
        />
            </li>
            <li className="card">
            <Store
          logoUrl={Netcare}
          storeName={"Netcare"}
          deliveryEta={"15mi"}
          deliveryTime={" Delivery at 12:00pm"}
          categories={" Healthcare- Medicine"}
          productType={"Pharmacy"}
        />
            </li>
        </ul>
        )
}