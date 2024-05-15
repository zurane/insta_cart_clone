import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PetWorld from "../petworld.png";
import Petzone from "../petzone.png";
import AbsolutePets from "../absolute pets.png";

export default function Pets() {

    return (
        <Row className="mx-4 px-2">
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={PetWorld} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Petworld</span>
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
                        <span className="delivery-type">Pets- Pet care</span>
                        <br />
                        <span className="category">Pets</span>
                    </div>
                </div>
            </Col>
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={Petzone} alt="store logo" width={60} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Petzone</span>
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
                        <span className="delivery-type">Pets - Supplies</span>
                        <br />
                        <span className="category">Petcare</span>
                    </div>
                </div>
            </Col>
            <Col className="py-3 mx-1 rounded store-card border">
                <div className="d-flex align-items-center gap-3">
                    <div className="store-logo-wrapper border py-3 px-2 rounded">
                        <img src={AbsolutePets} alt="store logo" width={50} />
                    </div>
                    <div className="store-details-wrapper">
                        <span className="store-name">Absolute Pets</span>
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
                        <span className="delivery-type">Pets - Supplies</span>
                        <br />
                        <span className="category">Pet care</span>
                    </div>
                </div>
            </Col>
        </Row>)
}