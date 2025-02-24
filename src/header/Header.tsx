import { Container, Grid2, MenuItem } from "@mui/material";
import styled from "styled-components";

const HeaderWrapper = styled(Grid2)`
  justify-contenxt: space-between;
`;

export const Header = () => {
  return (
    <HeaderWrapper container direction="row">
      <Container>
        <MenuItem>Discover</MenuItem>
        <MenuItem>Menu</MenuItem>
      </Container>
      <Container>Logo</Container>
      <Container>
        <MenuItem>Reservations</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Container>
    </HeaderWrapper>
  );
};
