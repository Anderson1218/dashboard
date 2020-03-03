import styled from "styled-components";
import { Box } from "grommet";

export const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 250px;
`;

export const Text = styled.span`
  width: 23%;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
`;

export const UpdateButton = styled(Box)`
  margin-left: 50px;
  cursor: pointer;
`;

export const ButtonGroup = styled(Box)`
  margin-top: 3rem;
`;
