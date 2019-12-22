import React from "react";
import { useState } from "react";
import { Form, FormField, Button, Box, TextInput } from "grommet";
import styled from "styled-components";

const ButtonGroup = styled(Box)`
  margin-top: 3rem;
`;

const LoginSignupForm = () => {
  const [isLogin, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = event => {
    event.preventDefault();
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
        {!isLogin && (
          <FormField label="Name">
            <TextInput
              placeholder="placeholder"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormField>
        )}
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
