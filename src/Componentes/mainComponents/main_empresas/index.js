import React, { useState } from 'react';

import { ButtonContainer, ButtonText } from "../../Estilos";
import { ContainerMain, IconLogin, PerfilContainer, ButtonsContainerPainel, ImageContainer, ButtonsContainerColumn } from "../estilos_main";

import Administrativo from './Administrativo';
import Agendamentos from './Agendamentos'
import Publicacoes from './publicacoes';

const TelaEstabelecimentos = ({ navigation }) => {

  const [selectedScreen, setSelectedScreen] = useState('administrativo');
  const widthButton = "120px";

  const selectScreen = (screen) => {
    setSelectedScreen(screen);
  };


  return (
    <ContainerMain>
      <PerfilContainer>
        <ImageContainer>
          <IconLogin source={require("../img/profile.png")} />
        </ImageContainer>
        <ButtonsContainerPainel>
          <ButtonContainer width={widthButton}>
            <ButtonText onPress={() => selectScreen('administrativo')}>Administrativo</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={widthButton}>
            <ButtonText onPress={() => selectScreen('agendamentos')}>Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={widthButton}>
            <ButtonText onPress={() => selectScreen('publicacoes')}>Publicações</ButtonText>
          </ButtonContainer>
        </ButtonsContainerPainel>
      </PerfilContainer>

      {selectedScreen === "administrativo" && (
        <Administrativo />
      )}
      {selectedScreen === 'agendamentos' && (
        <Agendamentos />
      )}
      {selectedScreen === 'publicacoes' && (
        <Publicacoes />
      )}
    </ContainerMain>
  )
};

export default TelaEstabelecimentos;