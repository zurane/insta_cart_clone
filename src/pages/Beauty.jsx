import React from "react";
import Store from "../components/Store";
import Cerave from "../assets/cerave-logo-top.svg";
import Deluxe from "../assets/deluxe.jpg";
import Sorbet from "../assets/sorbet.jpg";

export default function Beauty() {
  return (
    <ul className="stores">
      <li className="card">
        <Store
          logoUrl={Cerave}
          storeName={"Cerave"}
          deliveryEta={"15mi"}
          deliveryTime={"Delivery at 08:00am"}
          categories={"Beauty - skincare"}
          productType={"Skincare"}
        />
      </li>
      <li className="card">
        <Store
          logoUrl={Deluxe}
          storeName={"Deluxe"}
          deliveryEta={"15mi"}
          deliveryTime={"Delivery at 09:00am"}
          categories={"Beauty - skincare"}
          productType={"Skincare"}
        />
      </li>
      <li className="card">
        <Store
          logoUrl={Sorbet}
          storeName={"Sorbet"}
          deliveryEta={"20mi"}
          deliveryTime={"Delivery at 10:00am"}
          categories={"Beauty - skincare"}
          productType={"Skincare"}
        />
      </li>
    </ul>
  );
}
