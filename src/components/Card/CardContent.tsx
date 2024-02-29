import React from "react";
import styled, { css } from "styled-components";




type ContentPropsType = {
    titleValue: string
    text:string
}

export function Content (props:ContentPropsType ) {
return (
    <CardContent>
<CardTitle>{props.titleValue}</CardTitle>
<WrapperText >
<CardText>
{props.text}
</CardText>
</WrapperText>
<CardBtn btnType="primary">See more</CardBtn>
<CardBtn  btnType="secondary">See more</CardBtn>
    </CardContent>
)}



const CardContent = styled.div`
  padding: 0 20px;

  button + button {
    margin-left: 19px;
  }
`;


const CardTitle = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const WrapperText =styled.div`
  margin-bottom: 19px;
  margin-top: 20px;
  overflow-y: auto;
  -ms-overflow-style: none ;
      scrollbar-width: none;

  height: 40px;
`


const CardText = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;

  margin: 0;
  overflow-y: auto;

  color: #abb3ba;

  line-height: 1.67;

`;

type CardBtnPropsType = {
    btnType:'primary' | 'secondary'
};

const CardBtn = styled.button<CardBtnPropsType>`
  width: 86px;
  height: 30px;
  color: #fff;
  background-color: #000;
  border-radius: 5px;

  ${(props) =>
    props.btnType === 'primary' &&
    css<CardBtnPropsType>`
  color: #fff;
  background-color: #4e71fe;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: 0;
  `};

  ${(props) =>
    props.btnType === 'secondary' &&
    css<CardBtnPropsType>`
  color: #4e71fe ;
  border: solid 2px #4e71fe;
  background-color: #fff;
  `}
`;