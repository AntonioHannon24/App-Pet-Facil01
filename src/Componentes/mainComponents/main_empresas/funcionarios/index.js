import React from 'react';

import { ButtonsContainerColumn, ContainerMain, ButtonsContainerPainel, IconLogin, PerfilContainer } from "../../estilos_main";
import { ButtonContainer, ButtonText } from "../../../Estilos"
import { Text } from 'react-native';

const TelaFuncionarios = ({ navigation }) => {

  const widthButton = "120px";

  return (
    <ContainerMain>
      <ButtonsContainerColumn>
        <Text>Tela de Funcionarios</Text>
      </ButtonsContainerColumn>

    </ContainerMain>
  );
};

export default TelaFuncionarios;

