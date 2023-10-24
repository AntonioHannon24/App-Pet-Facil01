import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Container, Title, ServicoItem, ServicoText} from './Style';

const servicosDisponiveis = ['Banho', 'Banho e Tosa', 'Tosa Higiênica'];

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

