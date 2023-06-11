import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 100px;
  margin-top: 100px;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 2px;
  margin-bottom: 30px;
`;

const Option = styled.TouchableOpacity`
font-size: 25px;

`;

const OptionText = styled.Text`
font-size: 20px;
margin-top: 5px;
`;

const OptionText1 = styled.Text`
font-size: 20px;
margin-top: 10px;
font-weight: bold;
`;

const FloatingScreen = ({ pets, onPetSelect, onClose }) => {
  return (
    <Container>
      <Title>Selecione um pet:</Title>
      {pets.map((pet) => (
        <Option key={pet.id} onPress={() => onPetSelect(pet)}>
          <OptionText>{pet.name}</OptionText>
        </Option>
      ))}
      <Option onPress={onClose}>
        <OptionText1>Fechar</OptionText1>
      </Option>
    </Container>
  );
};

export default FloatingScreen;
