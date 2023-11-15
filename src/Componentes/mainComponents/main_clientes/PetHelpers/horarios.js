import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Container,
  Title,
  ServicoItem,
  ServicoText,
  View2,
  Container2,
  ButtonContainer2,
  buttonStyle,
  TextDescri,
} from './Style';

const servicosDisponiveis = ['Banho', 'Banho e Tosa', 'Tosa Higiênica'];

const petsData = [
  {
    id: 1,
    nome: 'Pet 1',
  },
  {
    id: 2,
    nome: 'Pet 2',
  },
  {
    id: 3,
    nome: 'Pet 3',
  },
];

const horariosDisponiveis = ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

const ServicosDisponiveis = ({ onSelectServico, onClose }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);

  const handlePetSelection = (petId) => {
    setSelectedPet(petId);
  };

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  return (
    <Container>
      <Container2>
        <Title>Selecione um Pet:</Title>
        {petsData.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            onPress={() => handlePetSelection(pet.id)}
            style={{
              ...buttonStyle,
              backgroundColor: selectedPet === pet.id ? 'purple' : 'white',
            }}>
            <TextDescri>{pet.nome}</TextDescri>
          </TouchableOpacity>
        ))}
      </Container2>

      {selectedPet && (
        <Container2>
          <Title>Selecione um serviço:</Title>
          {servicosDisponiveis.map((servico) => (
            <TouchableOpacity
              key={servico}
              onPress={() => handleServiceSelection(servico)}
              style={{
                ...buttonStyle,
                backgroundColor: selectedService === servico ? 'purple' : 'white',
              }}>
              <TextDescri>{servico}</TextDescri>
            </TouchableOpacity>
          ))}
        </Container2>
      )}

      {/* Adicione aqui a seleção de data e horário */}
      
      <ButtonContainer2>
        <TouchableOpacity onPress={onClose}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </ButtonContainer2>      

      <ButtonContainer2>
        <TouchableOpacity onPress={onClose}>
          <Text>Fechar</Text>
        </TouchableOpacity>
      </ButtonContainer2>
    </Container>
  );
};

export default ServicosDisponiveis;
