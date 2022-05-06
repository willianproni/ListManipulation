import React from "react";
import { Item, ItemCheck, ItemText } from "./styles";

export default (props: any) => {
    return (
        <Item onPress={props.onPress} activeOpacity={1} underlayColor="#ddd">
            <>
                <ItemText>{props.data.task}</ItemText>
                <ItemCheck done={props.data.done}></ItemCheck>
            </>
        </Item>
    );
}