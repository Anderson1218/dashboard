import React, { useState } from "react";
import { toggleTheme } from "../redux/theme/theme.action";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  ResponsiveContext,
  Layer,
  Text
} from "grommet";
import { FormClose, User, Cycle } from "grommet-icons";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function HomePage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <AppBar>
            <Heading level="3" margin="none">
              My App
            </Heading>
            <Box direction="row">
              <Button
                icon={<Cycle />}
                onClick={() => dispatch(toggleTheme())}
              />
              <Button
                icon={<User />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </Box>
          </AppBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              <Text>Hello App</Text>
            </Box>
            {!showSidebar || size !== "small" ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  elevation="small"
                  align="center"
                  justify="center"
                >
                  sidebar
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background="light-2"
                  tag="header"
                  justify="end"
                  align="center"
                  direction="row"
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(!showSidebar)}
                  />
                </Box>
                <Box fill background="light-2" align="center" justify="center">
                  sidebar
                </Box>
              </Layer>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default HomePage;
