import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PicknPayLogo from "../PicknPayLogo.svg";
import Woolworths from "../woolworths.svg";
import Checkers from "../checkers-logo.svg";

export default function AllStores() {
    return (
        <Row className="mx-4 px-2">
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={PicknPayLogo} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">PicknPay Supermarket</span>
                        <br />
                        <span className="delivery-eta">
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
                            Delivery by 10:00am <span>• 30 mi</span>
                        </span>
                        <br />
                        <span className="delivery-type">Alcohol- Organic - Groceries</span>
                        <br />
                        <span className="category">Grocery</span>
                    </div>
                </div>
            </Col>
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={Woolworths} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Woolworths Foods</span>
                        <br />
                        <span className="delivery-eta">
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
                            Delivery by 9:30am <span>• 60 mi</span>
                        </span>
                        <br />
                        <span className="delivery-type">Alcohol- Organic - Groceries</span>
                        <br />
                        <span className="category">Grocery</span>
                    </div>
                </div>
            </Col>
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={Checkers} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Checkers</span>
                        <br />
                        <span className="delivery-eta">
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
                            Delivery by 8:30am <span>• 15 mi</span>
                        </span>
                        <br />
                        <span className="delivery-type">Alcohol- Organic - Groceries</span>
                        <br />
                        <span className="category">Grocery</span>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
