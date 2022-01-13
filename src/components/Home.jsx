import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { Button } from "antd";

const HomeStyle = styled.div`
  max-width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  padding-top: 20px;
`;

export default function Home() {
  return (
    <HomeStyle>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <div style={{ margin: "0 auto" }}>
        <Button
          style={{
            color: "#1890ff",
            borderColor: "#1890ff",
            marginLeft: "10px",
          }}
        >
          Xem thêm
        </Button>
      </div>
    </HomeStyle>
  );
}
