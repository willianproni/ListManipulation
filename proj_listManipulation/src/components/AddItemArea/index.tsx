import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Container, InputArea } from "./styled";

export function AddItemArea(props: any) {
    const [item, setItem] = useState('');

    function handleSubmit() {
        if (item.trim() != "") {
            props.onAdd(item);
        }
        setItem('')
    }

    return (
        <Container>
            <InputArea
                placeholder="Adicionar Item..."
                value={item}
                onChangeText={setItem}
                placeholderTextColor="#333"
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </Container>
    );
}