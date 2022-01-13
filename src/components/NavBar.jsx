import React, { useState, useEffect } from "react";
import logo from "./image/logo.png";
import { Input, Button, Avatar, Badge, Modal, Tooltip, Popover } from "antd";
import {
  BellOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { getRequest } from "../hooks/api";
const NavBarStyle = styled.div`
  display: flex;
  max-width: 80vw;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
`;

const { Search } = Input;
export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      await getRequest("/users")
        .then((data) => setUserName(data.userName))
        .catch((err) => console.log());
    };
    getUser();
  }, []);

  const handleLogo = () => {
    navigate("/");
  };

  const handleLogin = () => {
    setVisible(true);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <NavBarStyle>
      <Modal visible={visible} footer={null} onCancel={onCancel}>
        {isLogin ? (
          <>
            <Login onCancel={onCancel} setUserName={setUserName} />
            <p style={{ borderTop: "1px solid #efefef" }}>
              Do not have an account?
              <Button type="link" onClick={() => setIsLogin(false)}>
                Register
              </Button>
            </p>
          </>
        ) : (
          <>
            <Register onCancel={onCancel} />
            <p style={{ borderTop: "1px solid #efefef" }}>
              Do you already have an account?
              <Button type="link" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </p>
          </>
        )}
      </Modal>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "90px", marginRight: "40px", cursor: "pointer" }}
          onClick={handleLogo}
        />
        <Search
          placeholder="Search . . ."
          onSearch={() => {}}
          style={{ width: "400px" }}
        />
      </div>
      {userName ? (
        <div>
          <Button type="primary" onClick={handleLogin}>
            Login/Register
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <Tooltip placement="bottom" title="Nguyễn Minh Hằng">
            <Avatar
              size={35}
              style={{ marginRight: "10px", cursor: "pointer" }}
              src="https://getbootstrap.com.vn/blog/wp-content/uploads/2020/02/min-la-ai.jpg"
            >
              {"Quan"?.toUpperCase()}
            </Avatar>
          </Tooltip>
          <Popover
            content="Bạn đặt hàng thành công"
            title="Thông báo"
            trigger="click"
          >
            <Button type="text">
              <Badge count={5}>
                <BellOutlined style={{ fontSize: "25px" }} />
              </Badge>
            </Button>
          </Popover>
          <Button type="text" onClick={() => navigate("/cart")}>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: "27px" }} />
            </Badge>
          </Button>
          <Button type="text">
            <LogoutOutlined style={{ fontSize: "24px" }} />
          </Button>
        </div>
      )}
    </NavBarStyle>
  );
}
