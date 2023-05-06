import React from 'react';

import {ContainerMain, IconLogin, TextContainer, WelcomeText, PetContainer, PetText} from "./Style";

const TelaUser = () => {
  const pets = ["Pet 1", "Pet 2", "Pet 3"]; // array com informações dos pets

  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
      </TextContainer>
      <PetContainer>
        {pets.map((pet, index) => (
          <PetText key={index}>{pet}</PetText>
        ))}
      </PetContainer>
    </ContainerMain>
  );
};

export default TelaUser;

