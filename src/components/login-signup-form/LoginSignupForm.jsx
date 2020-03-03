import React from "react";
import { useState } from "react";
import { Form, FormField, Button, Box, TextInput } from "grommet";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import jwtDecoder from "jwt-decode";

const ButtonGroup = styled(Box)`
  margin-top: 3rem;
`;

const LoginSignupForm = () => {
  let history = useHistory();
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };
  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://authchatserver.herokuapp.com/users/token",
        {
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ email, password }),
          method: "POST"
        }
      );
      if (res.status !== 200) {
        throw new Error("Login fail");
      }
      const token = await res.json();
      localStorage.setItem("token", token);
      const decoded = jwtDecoder(token);
      if (decoded.role === "admin") {
        history.push("/dashboard");
      } else {
        history.push("/chat");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRegister = async () => {
    try {
      const res = await fetch("https://authchatserver.herokuapp.com/users", {
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        method: "POST"
      });
      if (res.status !== 200) {
        throw new Error("Register fail");
      } else {
        handleLogin();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      pad="medium"
      border={{
        size: "medium",
        style: "solid",
        side: "all"
      }}
      elevation="medium"
    >
      <Form onSubmit={handleSubmit}>
        <FormField label="Email">
          <TextInput
            placeholder="placeholder"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormField>
        <FormField label="Password">
          <TextInput
            placeholder="placeholder"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormField>
        <ButtonGroup direction="row" justify="around">
          <Button
            type="submit"
            label={isLogin ? "Login Now" : "Register Now"}
          />
          <Button
            label={isLogin ? "To Register" : "To Login"}
            onClick={() => {
              resetFields();
              setLogin(!isLogin);
            }}
          />
        </ButtonGroup>
      </Form>
    </Box>
  );
};

export default LoginSignupForm;
