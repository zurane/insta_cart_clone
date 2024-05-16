import React from "react";
import Store from "../components/Store";
import Cerave from "../assets/cerave-logo-top.svg";
import Deluxe from "../assets/deluxe.jpg";
import Sorbet from "../assets/sorbet.jpg";
import Game from "../assets/game-logo.png";
import LeroyMerlin from "../assets/leroy-merlin.svg";
import Makro from "../assets/makro-icon-logo.png";
import LiquorBoys from "../assets/liquor-boys.png";
import Woolworths from "../assets/woolworths.svg";
import Checkers from "../assets/checkers-logo.svg";
import PicknPayLogo from "../assets/PicknPayLogo.svg";
import Clicks from "../assets/Clicks-logo.svg";
import Dischem from "../assets/DCP.JO_BIG-7415fb8e.png";

export default function AllStores() {
    return (
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
            <li className="card">
                <Store
                    logoUrl={PicknPayLogo}
                    storeName={"PicknPay"}
                    deliveryEta={"60mi"}
                    deliveryTime={"Delivery at 12:00pm"}
                    categories={"Groceries - FMGC"}
                    productType={"Groceries"}
                />
            </li>
            <li className="card">
                <Store
                    logoUrl={Woolworths}
                    storeName={"Woolworths"}
                    deliveryEta={"30mi"}
                    deliveryTime={"Delivery at 12:00pm"}
                    categories={"Groceries - FMGC"}
                    productType={"Groceries"}
                />
            </li>
            <li className="card">
                <Store
                    logoUrl={Checkers}
                    storeName={"Checkers"}
                    deliveryEta={"20mi"}
                    deliveryTime={"Delivery at 12:00pm"}
                    categories={"Groceries - FMGC"}
                    productType={"Groceries"}
                />
            </li>
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
                    logoUrl={Makro}
                    storeName={"Makro"}
                    deliveryEta={"15mi"}
                    deliveryTime={" Delivery at 12:00pm"}
                    categories={" Electronics - Wholesale"}
                    productType={"Pharmacy"}
                />
            </li>

        </ul>
    );
}
