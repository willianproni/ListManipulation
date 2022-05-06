import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Scroll = styled.ScrollView`
    background: #A9A9A9;
`;

export const Listagem = styled.FlatList`
    background: #A9A9A9;
`;

export const Item = styled.TouchableOpacity`
    padding: 10px;
    flex-direction: row;
`;

export const ItemText = styled.Text`
    font-size: 15px;
    flex: 1;
    color: #fff;
`;

export const ItemCheck = styled.View`
    width: 20px;
    height: 20px;
    border: 5px solid #ccc;
    border-radius: 10px;
`;