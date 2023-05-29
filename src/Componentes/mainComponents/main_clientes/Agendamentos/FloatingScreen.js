import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FloatingScreen = ({ pets, onPetSelect, onClose }) => {
  return (
    // Container principal que ocupa todo o espaço disponível e define o estilo de fundo e alinhamento dos elementos
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: '30px', marginLeft: '30px', marginBottom: '80px', marginTop: '80px' }}>
      <Text>Selecione um pet:</Text>
      {/* Mapeia os pets para renderizar as opções */}
      {pets.map((pet) => (
        // Componente TouchableOpacity usado para envolver cada opção de pet
        <TouchableOpacity key={pet.id} onPress={() => onPetSelect(pet)}>
          <Text>{pet.name}</Text>
        </TouchableOpacity>
      ))}
      {/* Botão para fechar o componente */}
      <TouchableOpacity onPress={onClose}>
        <Text>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingScreen;
