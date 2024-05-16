import React from "react";
import Store from "../components/Store";
import PetWorld from "../assets/petworld.png";
import Petzone from "../assets/petzone.png";
import AbsolutePets from "../assets/absolute pets.png";

export default function Pets() {

    return (

        <div className="stores">
            <div className="card">
                <Store logoUrl={PetWorld} storeName={"Pet World"} deliveryEta={"20mi"} deliveryTime={"Delivery at 10:00am"} categories={"Petcare - Pet food"} productType={"Petcare"} />

            </div>
            <div className="card">
                <Store logoUrl={Petzone} storeName={"Petzone"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Groceries - FMGC"} productType={"Groceries"} />

            </div>
            <div className="card">
                <Store logoUrl={AbsolutePets} storeName={"Absolute Pets"} deliveryEta={"20mi"} deliveryTime={"Delivery at 12:00pm"} categories={"Groceries - FMGC"} productType={"Groceries"} />

            </div>
        </div>

    )
}