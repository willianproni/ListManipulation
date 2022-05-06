import styled from "styled-components/native";

export const Item = styled.TouchableHighlight`
    padding-left: 20px;
    padding-right: 20px;
    background: #eee;
    flex-direction: row;
    height: 50px;
    align-items: center;

`;

export const ItemText = styled.Text`
    font-size: 15px;
    flex: 1;
`;

export const ItemCheck = styled.View`
    width: 20px;
    height: 20px;
    border: 5px solid #ccc;
    background:  ${props => props.done?'transparent' : '#ccc'};
    border-radius: 10px;
`;