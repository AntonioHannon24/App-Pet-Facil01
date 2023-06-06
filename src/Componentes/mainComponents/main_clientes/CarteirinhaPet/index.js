import React from 'react';
import { ContainerMain, View, PetText } from "../Style";
import {TextContainer } from '../../estilos_main.js';
import { Text } from 'react-native';
import {IconCarteiraPet, CarteiraContainer, CarteiraText, Text1} from './Style'

const CarteirinhaPet = ({ route }) => {
  const { petId } = route.params;

  const pets = [
    {
      id: 1,
      nome: 'Pet 1',
      raca: 'Raça do Pet 1',
      cor: 'Cor do Pet 1',
      idade: 3,
      data: '01/05/2020',
      Tamanho: 'Pequeno',
      Sexo: 'Feminino',
    },
    {
      id: 2,
      nome: 'Pet 2',
      raca: 'Raça do Pet 2',
      cor: 'Cor do Pet 2',
      idade: 4,
      data: '01/05/2020',
      Tamanho: 'Pequeno',
      Sexo: 'Feminino',
    },
    {
      id: 3,
      nome: 'Pet 3',
      raca: 'Raça do Pet 3',
      cor: 'Cor do Pet 3',
      idade: 2,
      data: '01/05/2020',
      Tamanho: 'Pequeno',
      Sexo: 'Feminino',
    },
  ];

  const petInfo = pets.find((pet) => pet.id === petId);

  return (
    <ContainerMain>
      <TextContainer>
        <IconCarteiraPet source={require("../../img/cara-de-cachorro.png")} />
      </TextContainer>
      <CarteiraText>{petInfo.nome}</CarteiraText>
      <View>
          <CarteiraContainer>
            <PetText>
              <Text1>Raça:</Text1>
              <Text>{petInfo.raca}</Text>
            </PetText>
            <PetText>
              <Text1>Cor:</Text1>
              <Text>{petInfo.cor}</Text>
            </PetText>
            <PetText>
              <Text1>Idade:</Text1>
              <Text>{petInfo.idade}</Text>
            </PetText>
            <PetText>
              <Text1>Data Nascimento:</Text1>
              <Text>{petInfo.data}</Text>
            </PetText>
            <PetText>
              <Text1>Tamanho:</Text1>
              <Text>{petInfo.Tamanho}</Text>
            </PetText>
            <PetText>
              <Text1>Sexo:</Text1>
              <Text>{petInfo.Sexo}</Text>
            </PetText>
          </CarteiraContainer>
        </View>
    </ContainerMain>
  );
};

export default CarteirinhaPet;
