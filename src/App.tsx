import React from "react";
import "./App.css";
import styled from "styled-components";
import { Card } from "./components/card/Card";
import { BoxCards } from "./components/boxcard/BoxCard";
import { BoxForm } from "./components/boxform/BoxForm";
import { CardPropsType } from "./components/card/Card";

const MasCards:CardPropsType[] = [
  
  {
      title: "Hypertext Markup Language",
      cardText: "HTML - cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&usqp=CAU",
  }

  
]

function App() {
  return (
    <StyledWrapper>
      <BoxForm/>
      <BoxCards cardsItems={MasCards}/>
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
