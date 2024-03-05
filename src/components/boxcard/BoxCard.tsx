import React, { FC } from "react";
import styled from "styled-components";
import { Card } from "../card/Card";
import { CardPropsType } from "../card/Card";




export const BoxCards = (props:{cardsItems:CardPropsType[]} )=> {
    return (
        <StyledBoxCard>
            {props.cardsItems.map((item:CardPropsType, index)=>{
                return <Card title={item.title} cardText={item.cardText} url={item.url} />
            })}
        </StyledBoxCard>
    )
};

const StyledBoxCard = styled.section`
    width: 70%;
    min-height: 800px;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;

    background-color: rgba(252, 252, 252, 0.283);

    border: 10px solid rgba(252, 252, 252, 0.584);
    border-radius: 25px;

`