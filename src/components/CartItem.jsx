import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const CartItemStle = styled.div`
  display: flex;
  flex-direction: row;
  weight: 100%;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

export default function CartItem() {
  return (
    <CartItemStle>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          alt="item"
          src="https://getbootstrap.com.vn/blog/wp-content/uploads/2020/02/min-la-ai.jpg"
          style={{ width: "30px", height: "30px", objectFit: "cover" }}
        />
        <p style={{ padding: "2px 10px" }}>
          Nguyễn Minh Hằng, thường được biết đến với n sdfadđfsdfghệ danh Min là
          một nữ ca sĩ và vũ công người
        </p>
        <p
          style={{
            fontWeight: "600",
          }}
        >
          20000 đ
        </p>
      </div>
      <div>
        <Button type="primary" danger>
          <DeleteOutlined />
        </Button>
      </div>
    </CartItemStle>
  );
}
