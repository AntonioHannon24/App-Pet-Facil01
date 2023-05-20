import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FloatingScreen = ({ pets, onPetSelect, onClose }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: '30px', marginLeft: '30px', marginBottom: '80px', marginTop: '80px' }}>
      <Text>Selecione um pet:</Text>
      {pets.map((pet) => (
        <TouchableOpacity key={pet.id} onPress={() => onPetSelect(pet)}>
          <Text>{pet.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={onClose}>
        <Text>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingScreen;
