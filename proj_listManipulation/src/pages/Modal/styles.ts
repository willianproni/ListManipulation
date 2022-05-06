import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background: blue;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.View`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

export const BoxBody = styled.View`
    width: 90%;
    height: 200px;
    border-radius: 20px;
    background: #fff;
    align-items: center;
    justify-content: space-around;
`;

export const ButtonAlert = styled.TouchableOpacity`
    background-color: #3085D6;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const TextAlert = styled.Text`
    font-size: 30px;
`;

export const TextDescription = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;