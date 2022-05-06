import React from "react";
import { Item, ItemCheck, ItemText, Listagem, Scroll } from "./styles";

export default (props: any) => {
    return (
        <Item onPress={() => { }} activeOpacity={0.5}>
            <>
                <ItemText>{props.data.task}</ItemText>
                <ItemCheck></ItemCheck>
            </>
        </Item>
    );
}