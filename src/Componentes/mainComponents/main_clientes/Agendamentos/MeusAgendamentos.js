import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import FloatingScreen from './FloatingScreen';

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 80px;
  margin-top: 80px;
  border-radius: 20px;
  border: 1px solid black;
`;

const Title = styled.Text`
  font-size: 25px;
`;

const AgendamentoContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 100px;
`;

const PetText = styled.Text`
  font-size: 20px;
`;

const DataText = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
`;

const MeusAgendamentos = ({ onClose }) => {
  const agendamentos = [
    { id: 1, pet: 'Pet 1', data: '08/01/2023' },
  ];

  return (
    <Container>
      <Title>Meus Agendamentos:</Title>
      {agendamentos.map((agendamento) => (
        <AgendamentoContainer key={agendamento.id}>
          <PetText>Pet: {agendamento.pet}</PetText>
          <DataText>Data: {agendamento.data}</DataText>
        </AgendamentoContainer>
      ))}
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("AgendamentosClientes")}>Fechar</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default MeusAgendamentos;
