import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export function AsyncStore() {
    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');

    async function Salvar() {
        if (newName != '') {
            await AsyncStorage.setItem('@nome', newName)
            setName(newName);
        }
    }

    return (
        <View>
            <TextInput
                placeholder="Digite"
                value={newName}
                onChangeText={setNewName}
            />

            <Button
                title="Salvar"
            />

            <Text onPress={Salvar}>{name}</Text>
        </View>
    );
}