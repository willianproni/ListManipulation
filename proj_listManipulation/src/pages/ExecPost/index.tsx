import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ccc;
    padding: 20px;
`;

const InputItem = styled.TextInput`
    border: 1px solid #000;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f4f4f4;
`;
export function RequestPost() {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    async function addPost() {
        const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 123,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const json = await req.json();
    }

    return (
        <Container>
            <InputItem placeholder="Title..." value={title} onChangeText={(i: any) => setTitle(i)} />
            <InputItem placeholder="Body..." value={body} onChangeText={(i: any) => setTitle(i)} />

            <Button
                title="Post"
                onPress={addPost}
            />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >

            </Modal>
        </Container>
    );
}