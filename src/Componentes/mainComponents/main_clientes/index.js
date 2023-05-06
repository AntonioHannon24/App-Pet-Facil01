import React from 'react';

import {ContainerMain, IconLogin, TextContainer, WelcomeText, PetContainer, PetText, ButtonsContainer, ButtonsContainer2} from "./Style";
import { ButtonContainer, ButtonText } from "../../Estilos.js"


const width = "110px";

const TelaUser = () => {
  //const pets = ["Pet 1", "Pet 2", "Pet 3"]; // array com informações dos pets

  return (
    <ContainerMain>

      <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
      </TextContainer> 

      <ButtonsContainer>
          <ButtonContainer width={width}>
            <ButtonText >Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >Agendamentos</ButtonText>
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

