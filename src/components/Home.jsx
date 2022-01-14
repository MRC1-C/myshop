import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { Button } from "antd";

const HomeStyle = styled.div`
  max-width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0 auto;
  padding-top: 20px;

`;

export default function Home() {
  return (
    <>
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
      
    </HomeStyle>
    <div style={{ display: "flex",alignItems: "center",maxWidth: "100vw", marginTop: "20px" }}>
        <Button
          style={{
            color: "#1890ff",
            borderColor: "#1890ff",
            marginLeft: "10px",
            margin: "0 auto"
          }}
        >
          Xem thêm
        </Button>
      </div>
    </>
   
  );
}
