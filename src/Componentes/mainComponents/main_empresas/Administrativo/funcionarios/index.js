import React from 'react';

import { ButtonsContainerColumn, ContainerMain } from "../../../estilos_main";

import { Text } from 'react-native';

const GerenciamentoFuncionarios = ({ navigation }) => {

  const widthButton = "120px";

  return (
    <ContainerMain>
      <ButtonsContainerColumn>
        <Text>Tela de Funcionarios</Text>
      </ButtonsContainerColumn>

    </ContainerMain>
  );
};

export default GerenciamentoFuncionarios;

