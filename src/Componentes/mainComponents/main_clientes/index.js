import React, { useState } from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, PetText } from "./Style";
import { ButtonContainer, ButtonText } from "../../Estilos.js"
import { WelcomeText, TextContainer, ButtonsContainer, ButtonsContainer2 } from '../estilos_main';
import { Text, Linking } from 'react-native';
import AdmPets from './AdmPets';

const TelaUser = ({ navigation }) => {
  const width = "110px";

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

  const [selectedPetId, setSelectedPetId] = useState(pets[0].id);

  const handlePetSelection = (id) => {
    setSelectedPetId(id);
  };

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  const handleNoticiasMundoPet = () => {
    Linking.openURL('https://gamma.app/docs/Untitled-p1nb84eemvqg38n');
  };

  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
          <PetTextContainer>
            {pets.map((pet) => (
              <PetText key={pet.id} onPress={() => handlePetSelection(pet.id)}>
                <PetText>{pet.nome}</PetText>
              </PetText>
            ))}
          </PetTextContainer>
        </View>
      </TextContainer>

      <ButtonsContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate("TelaUser")}>Meu perfil</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate("PetHelpers")}>PetHelpers</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>

      <ButtonsContainer2>
        <ButtonContainer width={"300px"}>
          <ButtonText onPress={() => navigation.navigate("CarteirinhaPet", { petId: selectedPetId })}>Carteirinha Meu Pet</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={"300px"}>
          <ButtonText onPress={() => navigation.navigate(AdmPets)}>Administração de Pets</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={"300px"}>
          <ButtonText>Administração de Perfil</ButtonText>
        </ButtonContainer>

        <ButtonContainer width={"300px"}>
          <ButtonText onPress={handleNoticiasMundoPet}>Notícias e Dicas de Saúde</ButtonText>
        </ButtonContainer>
      </ButtonsContainer2>
    </ContainerMain>
  );
};

export default TelaUser;
