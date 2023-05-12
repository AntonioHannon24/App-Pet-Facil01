import React from 'react';

import {ContainerMain, IconLogin, TextContainer, WelcomeText, PetTextContainer, View, PetText, ButtonsContainer, ButtonsContainer2} from "./Style";
import { ButtonContainer, ButtonText } from "../../Estilos.js"

const TelaUser = ({ nav }) => {

const navi = nav;

const width = "110px";

  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
          <PetTextContainer>
            <PetText>Pet 1</PetText>
            <PetText>Pet 2</PetText>
            <PetText>Pet 3</PetText>
          </PetTextContainer>
        </View> 
    </TextContainer>

      <ButtonsContainer>
          <ButtonContainer width={width}>
            <ButtonText >Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navi.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >PetHelpers</ButtonText>
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