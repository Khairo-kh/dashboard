import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import DashLayout from "./components/DashLayout";

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
    background-color: #2c3445;

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
  background-color: #111827;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.05);
`;

const NavbarBrand = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <NavbarBrand>Personal Dashboard</NavbarBrand>
      </Navbar>
      <DashLayout />
    </>
  );
};

export default App;
