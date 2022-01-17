import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar color="dark" expand="md">
        <Container fluid className="head">
          <NavbarBrand href="/">NASA Astronomy Photo of the Day</NavbarBrand>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  .head {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .head a {
    color: white;
    font-size: 2rem;
  }
`;
