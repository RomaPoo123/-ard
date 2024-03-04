import React from "react";
import styled from "styled-components";
import { Card } from "../card/Card";
import StandartFhoto from "../../img/Rectangle.jpg"

export const BoxForm= ()=>{
    return (
        <StyledBoxForm>
            <StyledForm>
            </StyledForm>
            <Styledprimer>
            <Card title = {"Hypertext Markup Language"} cardText={"HTML - cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере."} url = {StandartFhoto}/>
            </Styledprimer>
        </StyledBoxForm>
    );
};

const StyledBoxForm = styled.section`
    max-width: 50%;
    height: 28vh;
    background-color: rgba(252, 252, 252, 0.283);
    border: 10px solid rgba(252, 252, 252, 0.584);
    border-radius: 25px;
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledForm=styled.form`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    display: inline-block;
    background-color: #fff;
    margin-left: 100px;
`


const Styledprimer=styled.div`
    margin-right: 100px;
`