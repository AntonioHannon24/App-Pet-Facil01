import React from 'react';

import { ButtonsContainerColumn, ContainerMain, PerfilContainer,ButtonsContainerPainel, IconLogin } from "../estilos_main";
import { ButtonContainer, ButtonText } from "../../Estilos"

const TelaEstabelecimentos = ({navigation}) => {

  const width = "330px";
  const widthButton = "110px";


  return (
    <ContainerMain>
       <PerfilContainer>
          <IconLogin source={require('../img/profile.png')}/>
      </PerfilContainer>

      <ButtonsContainerPainel>
          <ButtonContainer width={widthButton}>
            <ButtonText >Administrativo</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={widthButton}>
            <ButtonText >Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={widthButton}>
            <ButtonText >Publicações</ButtonText>
          </ButtonContainer>
      </ButtonsContainerPainel>

      <ButtonsContainerColumn>
          <ButtonContainer width={width}>
            <ButtonText >Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={() => navigation.navigate('TelaFuncionarios')}>Gerenciamento de funcionarios</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >Gerenciamento de servicos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >Avaliações</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText >Outra Ideia</ButtonText>
          </ButtonContainer>
      </ButtonsContainerColumn>
    </ContainerMain>
  );
};

export default TelaEstabelecimentos;