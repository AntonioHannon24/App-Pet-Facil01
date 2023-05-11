import React from 'react';

import { ButtonsContainerColumn, ContainerMain } from "../../../estilos_main";

import { Text } from 'react-native';

const GerenciamentoServicos = () => {

  const widthButton = "120px";

  return (
    <ContainerMain>
      <ButtonsContainerColumn>
        <Text>Gerenciamento servicos</Text>
      </ButtonsContainerColumn>

    </ContainerMain>
  );
};

export default GerenciamentoServicos;

