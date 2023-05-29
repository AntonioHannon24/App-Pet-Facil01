import React from 'react';
import { ContainerMain, PetTextContainer, View, PetText } from "../Style";
import { WelcomeText, TextContainer } from '../../estilos_main.js';
import { Text } from 'react-native';
import {IconLoginPet} from './Style'

const CarteirinhaPet = ({ route }) => {
  const { petId } = route.params;

  // Função para buscar as informações do pet com base no petId
  const getPetInfo = (petId) => {
    // Lógica para buscar as informações do pet com base no petId
    // Retorne um objeto com as informações encontradas, como por exemplo:
    return {
      nome: 'Nome do Pet',
      raca: 'Raça do Pet',
      cor: 'Cor do Pet',
      idade: 3,
    };
  };

  const petInfo = getPetInfo(petId); // Obtenha as informações do pet com base no petId

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