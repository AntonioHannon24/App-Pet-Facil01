import React from 'react';

import { ButtonsContainer, ContainerMain, PerfilContainer } from "../estilos_main";
import { ButtonContainer, ButtonText } from "../../Estilos"

const TelaEstabelecimentos = ({navigation}) => {

  const width = "330px";


  return (
    <ContainerMain>
      <PerfilContainer>
          <ButtonText>teste</ButtonText>
      </PerfilContainer>

      <ButtonsContainer>
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
      </ButtonsContainer>
    </ContainerMain>
  );
};

export default TelaEstabelecimentos;