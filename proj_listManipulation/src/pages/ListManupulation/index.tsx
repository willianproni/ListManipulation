import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { AddItemArea } from "../../components/AddItemArea";
import ListaItem from "../../components/ListaItem";
import { ListTask, latitude } from "../../list"
import { Item, ItemCheck, ItemText, Listagem, Scroll } from "./styles";

export function ListManipulation() {
    const [item, setItem] = useState(ListTask);

    function addNewItem(txt: any) {
        let newItem = [...item];
        newItem.push({
            id: Math.random(),
            task: txt,
            done: false
        });
        setItem(newItem);

    }

    return (
        <SafeAreaView>
            <AddItemArea onAdd={addNewItem} />
            <Listagem
                data={item}
                renderItem={({ item }) => <ListaItem data={item} />}
            />
        </SafeAreaView>
    );
}