import React from 'react';

import {ContainerMain, TextContainer, WelcomeText, PetTextContainer, View, PetText, ButtonsContainer2} from "./Style";
import { IconLogin,ButtonsContainerPainel } from '../estilos_main';
import { ButtonContainer, ButtonText } from "../../Estilos.js"

const width = "110px";

const TelaUser = () => {

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



      <ButtonsContainerPainel>
          <ButtonContainer width={width}>
            <ButtonText >Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >PetHelpers</ButtonText>
          </ButtonContainer>
      </ButtonsContainerPainel>

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

