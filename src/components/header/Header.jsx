import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  toggleLeftPanel,
  toggleRightPanel
} from "../../redux/layout/layout.action";
import { toggleTheme } from "../../redux/theme/theme.action";
import { Box, Button, Heading } from "grommet";
import { User, Cycle, Tasks } from "grommet-icons";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
      <StyledHeading level="3" margin="none" onClick={() => history.push("/")}>
        HOME
      </StyledHeading>
      <Box direction="row">
        <Button icon={<Cycle />} onClick={() => dispatch(toggleTheme())} />
        <Button icon={<Tasks />} onClick={() => dispatch(toggleLeftPanel())} />
        <Button icon={<User />} onClick={() => dispatch(toggleRightPanel())} />
      </Box>
    </Box>
  );
};

export default Header;
