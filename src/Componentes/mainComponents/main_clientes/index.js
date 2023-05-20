import React from 'react';
import {ContainerMain, IconLogin , PetTextContainer, View, PetText} from "./Style";
import { ButtonContainer, ButtonText } from "../../Estilos.js"
import { WelcomeText,TextContainer, ButtonsContainer,ButtonsContainer2 } from '../estilos_main';
import { Text } from 'react-native';

const TelaUser = ({ navigation }) => {

const width = "110px";

  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
          <PetTextContainer>
            <PetText><Text>Pet 1</Text></PetText>
            <PetText><Text>Pet 2</Text></PetText>
            <PetText><Text>Pet 3</Text></PetText>
          </PetTextContainer>
        </View> 
    </TextContainer>

      <ButtonsContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navigation.navigate("TelaUser")} >Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navigation.navigate("PetHelpers")} >PetHelpers</ButtonText>
          </ButtonContainer>
      </ButtonsContainer>

      <ButtonsContainer2>
          <ButtonContainer width={"300px"}>
            <ButtonText >Carteirinha Meu Pet</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={"300px"}>
            <ButtonText >Administração de Pets</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={"300px"}>
            <ButtonText >Administração de Perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={"300px"}>
            <ButtonText >Notícias Mundo Pet</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={"300px"}>
            <ButtonText >Dicas de Saúde</ButtonText>
          </ButtonContainer>

      </ButtonsContainer2>
    </ContainerMain>
  );
};

export default TelaUser;