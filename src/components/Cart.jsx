import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { Row, Col, Button, Divider } from "antd";

const CartStyle = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 20px;
  height: calc(100vh - 100px);
  padding: 20px;
  border-radius: 5px;
`;

export default function Cart() {
  return (
    <CartStyle>
      <Row style={{ height: "100%" }}>
        <Col
          span={16}
          style={{
            marginRight: "20px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </Col>
        <Col
          span={7}
          style={{ backgroundColor: "white", padding: "20px", height: "100%" }}
        >
          <h1>Nguyến Minh Hằng</h1>
       
          <Divider />
          <h2>Tổng tiền sản phẩm</h2>
          <p style={{ fontSize: "20px" }}>10000 đ</p>
          <Divider />
          <h2>Phí giao hàng</h2>
          <p style={{ fontSize: "20px" }}>10000 đ</p>
          <Divider />
          <h1>Tổng</h1>
          <p style={{ fontSize: "20px" }}>10000 đ</p>
          <Divider />
          <Button type="primary" block>
            Mua hàng
          </Button>
        </Col>
      </Row>
    </CartStyle>
  );
}
