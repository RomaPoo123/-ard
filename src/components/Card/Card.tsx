import React from "react";
import img from "../../img/Rectangle.jpg"
import { CardBox } from "./CardBox.styled";
import { CardImg } from "./CardImg.styled";
import { Content } from "./CardContent";




export type CardPropsType = {
    title: string
    cardText : string
    url?: string

}

export function Card(props:CardPropsType) {
    return (
    <CardBox>
    <div>
<CardImg src={props.url}/>
    </div>
    <Content titleValue = {props.title} text = {props.cardText}/>
</CardBox>
    )
}







