import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sportscene from "../assets/sportscene_store_logo_8850bbe605.png";
import Woolworths from "../assets/woolworths.svg";
import Zara from "../assets/ZARA.png";

export default function Retail() {

    return (
        <Row className="mx-4 px-2">
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={Sportscene} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Sportscene</span>
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
                            Delivery by 10:00am <span>• 60 mi</span>
                        </span>
                        <br />
                        <span className="delivery-type">Retail - Sports</span>
                        <br />
                        <span className="category">Clothing</span>
                    </div>
                </div>
            </Col>
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={Zara} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Zara</span>
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
                            Delivery by 12:00pm <span>• 60 mi</span>
                        </span>
                        <br />
                        <span className="delivery-type">Clothing - Retail</span>
                        <br />
                        <span className="category">Fashion</span>
                    </div>
                </div>
            </Col>
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={Woolworths} alt="store logo" width={50} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Woolworths</span>
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
                            Delivery by 12:00pm <span>• 60 mi</span>
                        </span>
                        <br />
                        <span className="delivery-type">Essentials - Clothing</span>
                        <br />
                        <span className="category">Fashion</span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}