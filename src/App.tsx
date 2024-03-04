import styled, { createGlobalStyle } from "styled-components";
import DashLayout from "./components/DashLayout";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 1rem;
    margin-left: 12rem;
    margin-right: 12rem;
    padding: 0;
    font-family: "Space Grotesk", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;

    @media (max-width: 1080px) {
      margin-left: 6rem;
      margin-right: 6rem;
    }



    @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    }
  }
`;

const Navbar = styled.nav`
  background-color: #333;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  padding: 1rem;
  /* border-radius: 30px; */
`;

const NavbarBrand = styled.div`
  font-size: 1.5rem;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <NavbarBrand>My Website</NavbarBrand>
      </Navbar>
      {/* <DashLayout /> */}
    </>
  );
};

export default App;
