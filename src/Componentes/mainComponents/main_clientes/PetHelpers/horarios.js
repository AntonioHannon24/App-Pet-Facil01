import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  ServicoItem,
  ServicoText,
  View2,
  Container2,
  Container3,
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

const ServicosDisponiveis = ({ onClose }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);

  const navigation = useNavigation();

  const handlePetSelection = (petId) => {
    setSelectedPet(petId);
  };

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleHorarioSelection = (horario) => {
    setSelectedHorario(horario);

    // Abre a tela do calendário quando um horário é selecionado
    navigation.navigate('Calendar', {
      pet: selectedPet,
      servico: selectedService,
      horario: horario,
    });
  };

  const handleConfirm = () => {
    // Aqui você pode navegar para a próxima tela e passar as informações selecionadas
    navigation.navigate('AgendamentosClientes', {
      pet: selectedPet,
      servico: selectedService,
      horario: selectedHorario,
    });
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

      {selectedService && (
        <Container2>
          <Title>Selecione um horário:</Title>
          <Container3>
            {horariosDisponiveis.map((horario) => (
              <TouchableOpacity
                key={horario}
                onPress={() => handleHorarioSelection(horario)}
                style={{
                  ...buttonStyle,
                  backgroundColor: selectedHorario === horario ? 'purple' : 'white',
                }}>
                <TextDescri>{horario}</TextDescri>
              </TouchableOpacity>
            ))}
          </Container3>
        </Container2>
      )}

      <ButtonContainer2>
        <TouchableOpacity onPress={handleConfirm}>
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
