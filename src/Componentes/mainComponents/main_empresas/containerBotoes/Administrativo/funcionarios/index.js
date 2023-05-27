import React from 'react';

import { ButtonsContainer2, ContainerMain } from "../../../../estilos_main"

import { Text } from 'react-native';

const GerenciamentoFuncionarios = ({ navigation }) => {

  const widthButton = "120px";

  return (
    <ContainerMain>
      <ButtonsContainer2>
        <Text>Tela de Funcionarios</Text>
      </ButtonsContainer2>

    </ContainerMain>
  );
};

export default GerenciamentoFuncionarios;

