import React from "react";

function Store(props) {
    // Create a Store component with store all store properties.
    return (
        <div className="pt-3 pb-3 px-3 rounded store-card">
            <div className="d-flex align-items-center gap-3">
                <div className="store-logo-wrapper border py-3 px-2 rounded">
                    <img src={props.logoUrl} alt="store logo" width={50} />
                </div>
                <div className="store-details-wrapper">
                    <span className="store-name">{props.storeName}</span>
                    <br />
                    <span className="delivery-hours">
                        <span>
                            <svg
                                width="12"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M11.11 23a.998.998 0 0 1-.99-1.11l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44Z"></path>
                            </svg>
                        </span>
                        {props.deliveryTime} <span className="delivery-eta">• {props.deliveryEta}</span>
                    </span>
                    <br />
                    <span className="delivery-type">{props.categories}</span>
                    <br />
                    <span className="category">{props.productType}</span>
                </div>
            </div>
        </div>
    )
}
// Export the component.
export default Store;