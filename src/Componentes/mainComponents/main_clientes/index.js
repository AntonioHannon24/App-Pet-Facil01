import React, { useState } from 'react';

import {ContainerMain, TextContainer, WelcomeText, PetTextContainer, View, PetText, ButtonsContainer2} from "./Style";
import { IconLogin,ButtonsContainerPainel } from '../estilos_main';
import { ButtonContainer, ButtonText } from "../../Estilos.js"

import MeuPerfil from './MeuPerfil'
import Agendamentos from './Agendamentos';

const TelaUser = ({ navigation }) => {

  const [selectedScreen, setSelectedScreen] = useState('MeuPerfil');
  const widthButton = "110px";

  const selectScreen = (screen) => {
    setSelectedScreen(screen);
  };

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
          <ButtonContainer width={widthButton}>
            <ButtonText onPress={() => selectScreen('MeuPerfil')}>Meu Perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={widthButton}>
            <ButtonText onPress={() => selectScreen('Agendamentos')}>Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={widthButton}>
            <ButtonText onPress={() => selectScreen('PetHelpers')}>PetHelpers</ButtonText>
          </ButtonContainer>
        </ButtonsContainerPainel>

      {selectedScreen === "MeuPerfil" && (
      <MeuPerfil/>
      )}
      {selectedScreen === 'Agendamentos' && (
        <Agendamentos />
      )}
      {selectedScreen === 'PetHelpers' && (
        <PetHelpers />
      )}
      
    </ContainerMain>
  );
};

export default TelaUser;

