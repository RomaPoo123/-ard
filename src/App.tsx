import React from "react";
import "./App.css";
import styled from "styled-components";
import { Card } from "./components/card/Card";
import { BoxCards } from "./components/boxcard/BoxCard";
import { BoxForm } from "./components/boxform/BoxForm";

function App() {
  return (
    <StyledWrapper>
      <BoxForm/>
      <BoxCards/>
    </StyledWrapper>
    );
}


const StyledWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: rgb(222, 201, 201);
  padding-top: 20px;
`;

export default App;
