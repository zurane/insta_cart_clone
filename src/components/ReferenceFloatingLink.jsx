import React from "react";
import { NavLink } from "react-router-dom";


export default function ReferenceLink(){
    return (
        <div className="reference-link-btn">
            <div>
                 <NavLink to="https://www.instacart.com/store/directory?filter=all">
                    Visit reference website
                 </NavLink>
            </div>
        </div>
    )
}