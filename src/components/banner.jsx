import React from "react";
import { NavLink } from "react-router-dom";

export default function Banner() {

    // function to remove the banner when you click the close icon.
    function onClickHandle() {
        document.getElementById("banner").classList.add("close");
    }

    return (
        <div className="banner" id="banner">
            <div className="banner-content">
                <h6>
                    Free delivery on first 3 orders
                    <span className="small-text">
                        Time to get shopping. Terms apply.
                    </span>
                </h6>
            </div>
            <div className="shop-btn-block">
                <NavLink className="shop-btn">
                    Shop
                </NavLink>
                <NavLink onClick={onClickHandle} className="banner-close-btn">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"></path>
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}