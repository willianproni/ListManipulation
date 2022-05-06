import React, { useState } from "react";
import { Button, Image, Modal, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Box, BoxBody, ButtonAlert, Container, TextAlert, TextDescription } from "./styles";

export function ExModal() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container>
            <StatusBar barStyle="light-content" hidden={true} />
            <Button
                title="Mostrar Modal"
                onPress={() => setModalVisible(true)}
            />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <Box>

                    <BoxBody>
                        <Image source={require('../../assets/alert.png')} style={{ width: 70, height: 70 }} resizeMode="cover" />
                        <Text>Aconteceu um Erro na sua requisição</Text>
                        <ButtonAlert
                            onPress={() => setModalVisible(false)} >
                            <TextDescription>Confirmar</TextDescription>
                        </ButtonAlert>
                    </BoxBody>

                </Box>


            </Modal>
        </Container>
    );
}