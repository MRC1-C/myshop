import React from "react";
import { Button, Divider, Form, Input } from "antd";
import { postRequest } from "../hooks/api";
import styled from "styled-components";

const RegisterStyle = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
`;

export default function Register() {
  const [form] = Form.useForm();
  const handleRegister = async () => {
    console.log(form.getFieldsValue());
    await postRequest("/users/register", form.getFieldsValue())
      .then((data) => console.log("Succes"))
      .catch((err) => console.log(err));
  };

  return (
    <RegisterStyle>
      <h1 style={{ fontWeight: "750" }}>Welcome to C</h1>
      <Button type="primary" block style={{ marginBottom: "10px" }}>
        Register with Facebook
      </Button>
      <Button block>Register with Google</Button>
      <Divider />
      <Form layout="vertical" form={form}>
        <Form.Item
          label={<span style={{ fontWeight: "500" }}>User Name</span>}
          name="userName"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontWeight: "500" }}>Password</span>}
          name="password"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleRegister}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </RegisterStyle>
  );
}
