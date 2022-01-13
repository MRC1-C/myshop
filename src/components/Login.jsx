import React from "react";
import { Button, Divider, Form, Input } from "antd";
import { postRequest } from "../hooks/api";
import styled from "styled-components";

const LoginStyle = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
`;

export default function Login(props) {
  const [form] = Form.useForm();

  const handleLogin = async () => {
    await postRequest("/users/login", form.getFieldsValue())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        props.setUserName(form.getFieldValue("userName"));
      })
      .catch((err) => console.log(err));
    props.onCancel();
  };

  return (
    <LoginStyle>
      <h1 style={{ fontWeight: "750" }}>Welcome to C</h1>
      <Button type="primary" block style={{ marginBottom: "10px" }}>
        Login with Facebook
      </Button>
      <Button block>Login with Google</Button>
      <Divider />
      <Form layout="vertical" form={form}>
        <Form.Item
          name="userName"
          label={<span style={{ fontWeight: "500" }}>User Name</span>}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label={<span style={{ fontWeight: "500" }}>Password</span>}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </LoginStyle>
  );
}
