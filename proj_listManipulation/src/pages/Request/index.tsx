import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Modal, Text, View } from "react-native";

type user = {
    id: number;
    title: string;
    completed: boolean 
}

export function Request() {
    const [email, getEmail] = useState<user[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [modalView, setModalView] = useState(false);

    useEffect(() => {
        async function handleEmail() {
            setLoading(true);
            const req = await fetch("https://jsonplaceholder.typicode.com/todos");
            const json = await req.json();

            if (json) {
                getEmail(json);
            }
            setLoading(false)
        }

        handleEmail();
    }, [])



    return (
        <View>


            {/* <Modal
            animationType="fade"
            onRequestClose={() => setModalView(false)}

            
            >
                <Text><Text>{email}</Text></Text>
            </Modal> */}
            {loading &&
                <View>
                    <ActivityIndicator size="large" color="#000" />
                    <Text>Carregando...</Text>
                </View>
            }
            {!loading &&
                <>
                    <Text>{email?.length}</Text>
                    <FlatList
                        data={email}
                        renderItem={({ item }) => (
                            <>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                            </>
                        )}
                    />
                </>
            }
        </View>
    );
}