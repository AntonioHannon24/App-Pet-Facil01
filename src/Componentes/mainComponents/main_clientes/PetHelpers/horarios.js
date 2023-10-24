import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const servicosDisponiveis = ['Banho', 'Banho e Tosa', 'Tosa Higiênica'];

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 50px;
  border: 3px purple;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-top: 2px;
  margin-bottom: 30px;
`;

const ServicoItem = styled.TouchableOpacity`
  margin: 10px;
`;

const ServicoText = styled.Text`
  font-size: 15px;
`;


const ServicosDisponiveis = ({ onSelectServico, onClose }) => {
    return (
      <Container>
        <Title>Selecione um serviço:</Title>
        {servicosDisponiveis.map((servico) => (
          <ServicoItem key={servico} onPress={() => onSelectServico(servico)}>
            <ServicoText>{servico}</ServicoText>
          </ServicoItem>
        ))}
        <TouchableOpacity onPress={onClose}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </Container>
    );
  };

export default ServicosDisponiveis;

