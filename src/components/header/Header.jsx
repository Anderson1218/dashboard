import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleLeftPanel,
  toggleRightPanel
} from "../../redux/layout/layout.action";
import { toggleTheme } from "../../redux/theme/theme.action";
import { Box, Button, Heading } from "grommet";
import { User, Cycle, Tasks } from "grommet-icons";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box
      as="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
    >
      <Heading level="3" margin="none">
        HOME
      </Heading>
      <Box direction="row">
        <Button icon={<Cycle />} onClick={() => dispatch(toggleTheme())} />
        <Button icon={<Tasks />} onClick={() => dispatch(toggleLeftPanel())} />
        <Button icon={<User />} onClick={() => dispatch(toggleRightPanel())} />
      </Box>
    </Box>
  );
};

export default Header;
