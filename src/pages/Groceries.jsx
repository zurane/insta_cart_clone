import React from "react";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";

export default function Groceries () {

    return (
        <Row className="mx-5">
        <Col className="bg-primary p-3 mx-1 rounded">
            <div className="store-card d-flex">
                <div className="store-logo-wrapper border">
                    <img src="#" alt="store logo" width={40}/>
                </div>
                <div className="store-details-wrapper">
                    <p className="store-name">PicknPay</p>
                    <p className="delivery-eta">Delivery by 9:30am <span>• 30 mi</span></p>
                    <p className="delivery-type">Alcohol- Organic - Groceries</p>
                    <p className="category">Grocery</p>
                </div>
            </div>
        </Col>
        <Col className="bg-primary p-3 mx-1 rounded"> 1 of 2</Col>
        <Col className="bg-primary p-3 mx-1 rounded">1 of 3</Col>
    </Row>
    )
}