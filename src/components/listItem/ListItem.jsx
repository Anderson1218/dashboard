import React, { useState } from "react";
import {
  RemoveButton,
  ListItemContainer,
  Text,
  UpdateButton,
  ButtonGroup
} from "./ListItem.styles";
import { Box, Button, Layer, Form, FormField, TextInput } from "grommet";
import { Update } from "grommet-icons";

const ListItem = ({ user, handleDeleteUser, handleChangePassword }) => {
  const { id, email } = user;
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <ListItemContainer>
        <Text>{id}</Text>
        <Text>{email}</Text>
        <RemoveButton onClick={() => handleDeleteUser(id)}>
          &#10006;
        </RemoveButton>
        <UpdateButton>
          <Update onClick={() => setShow(!show)} />
        </UpdateButton>
      </ListItemContainer>
      <Box>
        {show && (
          <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <Box
              pad="medium"
              border={{
                size: "medium",
                style: "solid",
                side: "all"
              }}
              elevation="medium"
            >
              <Form>
                <FormField label="Password">
                  <TextInput
                    placeholder="placeholder"
                    type="New password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </FormField>
                <ButtonGroup direction="row" justify="around">
                  <Button
                    label={"Submit"}
                    onClick={() => {
                      handleChangePassword(id, password);
                      setShow(false);
                    }}
                  />
                </ButtonGroup>
              </Form>
            </Box>
          </Layer>
        )}
      </Box>
    </>
  );
};

export default ListItem;
