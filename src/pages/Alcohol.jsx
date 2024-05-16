import React from "react";
import Store from "../components/Store";
import PicknPayLogo from "../assets/PicknPayLogo.svg";
import LiquorBoys from "../assets/liquor-boys.png";
import Checkers from "../assets/checkers-logo.svg";

export default function Alcohol() {
  return (

    // We use our store component and pass in the props respective to the store category.

    <ul className="stores">
      <li className="card">
        <Store
          logoUrl={PicknPayLogo}
          storeName={"Bottles by PinknPay"}
          deliveryEta={"15mi"}
          deliveryTime={" Delivery at 12:00pm"}
          categories={"Alcohol - Beverages"}
          productType={"Alcohol"}
        />
      </li>
      <li className="card">
        <Store
          logoUrl={Checkers}
          storeName={"Checkers Liquor"}
          deliveryEta={"20mi"}
          deliveryTime={" Delivery at 11:00pm"}
          categories={"Alcohol - Beverages"}
          productType={"Alcohol"}
        />
      </li>
      <li className="card">
        <Store
          logoUrl={LiquorBoys}
          storeName={"Liquor City"}
          deliveryEta={"15mi"}
          deliveryTime={" Delivery at 12:00pm"}
          categories={"Alcohol - Beverages"}
          productType={"Alcohol"}
        />
      </li>
    </ul>
  );
}
