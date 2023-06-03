import React from 'react';
import { ContainerMain, PetTextContainer, View, PetText } from "../Style";
import { WelcomeText, TextContainer } from '../../estilos_main.js';
import { Text } from 'react-native';
import {IconLoginPet} from './Style'

const CarteirinhaPet = ({ route }) => {
  const { petId } = route.params;

  const pets = [
    {
      id: 1,
      nome: 'Pet 1',
      raca: 'Raça do Pet 1',
      cor: 'Cor do Pet 1',
      idade: 3,
    },
    {
      id: 2,
      nome: 'Pet 2',
      raca: 'Raça do Pet 2',
      cor: 'Cor do Pet 2',
      idade: 4,
    },
    {
      id: 3,
      nome: 'Pet 3',
      raca: 'Raça do Pet 3',
      cor: 'Cor do Pet 3',
      idade: 2,
    },
  ];

  const petInfo = pets.find((pet) => pet.id === petId);

  return (
    <ContainerMain>
      <TextContainer>
        <IconLoginPet source={require("../../img/cara-de-cachorro.png")} />
        <View>
          <WelcomeText>{petInfo.nome}</WelcomeText>
          <PetTextContainer>
            <PetText>
              <Text>Raça: {petInfo.raca}</Text>
            </PetText>
            <PetText>
              <Text>Cor: {petInfo.cor}</Text>
            </PetText>
            <PetText>
              <Text>Idade: {petInfo.idade}</Text>
            </PetText>
          </PetTextContainer>
        </View>
      </TextContainer>
    </ContainerMain>
  );
};

export default CarteirinhaPet;
