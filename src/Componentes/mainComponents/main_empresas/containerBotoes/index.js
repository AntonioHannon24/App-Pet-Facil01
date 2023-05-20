import React from "react"

import { Container } from "./Style"
import { TextContainer, IconLogin, WelcomeText, ButtonsContainer } from "../../estilos_main"
import { ButtonContainer, ButtonText } from "../../../Estilos";
import { View } from "react-native";

const ContainerBotoes = ({navigate}) => {

    const width = "125px";
    const handleClick = (screenName) => {
        navigate(screenName);
      };

    return (
        <Container>
            <TextContainer marginTop="20">
                <IconLogin source={require('../../img/profile.png')} />
                <View>
                    <WelcomeText>Bem-vindo PetHelper</WelcomeText>
                </View>
            </TextContainer>
            <ButtonsContainer paddingLeft="4px">
                <ButtonContainer width={width}>
                    <ButtonText onPress={()=>handleClick('TelaEstabelecimentos')} >Administrativo</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText onPress={()=>handleClick('EstabAgendamentos')}>Agenda</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText onPress={()=>handleClick('EstabPublicacoes')}>Publicações</ButtonText>
                </ButtonContainer>
            </ButtonsContainer>
        </Container>
    );
}
export default ContainerBotoes;