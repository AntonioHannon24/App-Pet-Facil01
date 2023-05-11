import React from 'react';

import { ButtonsContainerColumn, ContainerMain } from "../../../estilos_main";

import { Text } from 'react-native';

const PerfilEstabelecimento = () => {

  const widthButton = "120px";

  return (
    <ContainerMain>
      <ButtonsContainerColumn>
        <Text>Perfil Estabelecimento</Text>
      </ButtonsContainerColumn>

    </ContainerMain>
  );
};

export default PerfilEstabelecimento;

