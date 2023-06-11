import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FloatingScreen from './FloatingScreen';

const MeusAgendamentos = ({ onClose }) => {
  // Lista fictícia de agendamentos
  const agendamentos = [
    { id: 1, pet: 'Pet 1', data: '2023-06-08' },
    { id: 2, pet: 'Pet 2', data: '2023-06-09' },
    { id: 3, pet: 'Pet 3', data: '2023-06-10' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: '30px', marginLeft: '30px', marginBottom: '80px', marginTop: '80px' }}>
      <Text>Meus Agendamentos:</Text>
      {/* Renderiza a lista de agendamentos */}
      {agendamentos.map((agendamento) => (
        <View key={agendamento.id}>
          <Text>Pet: {agendamento.pet}</Text>
          <Text>Data: {agendamento.data}</Text>
        </View>
      ))}
      
      {/* Botão para fechar a tela */}
      <TouchableOpacity onPress={onClose}>
        <Text>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MeusAgendamentos;
