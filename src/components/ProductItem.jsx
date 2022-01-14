import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const name =
  "Nguyễn Minh Hằng, thường được biết đến với n sdfadđfsdfghệ danh Min là một nữ ca sĩ và vũ công người";

const ProductItemStyle = styled.div`
  width: 380px;
  height: 390px;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  &:hover {
    border: 1px solid #efefef;
  }
`;

export default function ProductItem() {
  const navigate = useNavigate();
  return (
    <ProductItemStyle onClick={() => navigate("/2")}>
      <img
        alt="item"
        src="https://getbootstrap.com.vn/blog/wp-content/uploads/2020/02/min-la-ai.jpg"
        style={{ width: "100%", height: "80%", objectFit: "cover" }}
      />
      <p style={{ padding: "2px 10px", margin: 0 }}>
        {name.length > 98 ? name.slice(0, 90) + "..." : name}
      </p>
      <p style={{ padding: "2px 10px", margin: 0, fontWeight: "600" }}>
        20000 đ
      </p>
    </ProductItemStyle>
  );
}
