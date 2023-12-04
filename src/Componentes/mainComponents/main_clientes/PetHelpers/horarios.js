import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, ServicoItem, ServicoText, View2, Container2, Container3, ButtonContainer2, buttonStyle, TextDescri } from './Style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config';

const ServicosDisponiveis = ({ servicos, onSelectServico, onClose, route }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [userId, setUserId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [pets, setPets] = useState([]);
  const { petshop } = route.params.petshop;
  const { horarios } = route.params.horarios
  const [selectedHorario, setSelectedHorario] = useState(route.params.horarios.data)
  const [hour,setHour] = useState(horarios)
  const [selectHorarios, setSelectHorarios] = useState(null);

  const [servicosDoPetshop, setServicosDoPetshop] = useState(route.params.petshop.servico);

  const navigation = useNavigation();

  const [selectedPetshop, setSelectedPetshop] = useState(null);

  // Exemplo de recuperação do token na tela de Serviços Disponíveis
  useEffect(() => {
    const getUserid = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log(selectedHorario.length)
        if (userId) {
          setUserId(userId);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserid();

  }, []);

  useEffect(() => {
    if (userId) {
      fetchUserPets();
    }
  }, [userId]);

  const fetchUserPets = async () => {
    try {
      const urls = `${URL}usuarios/${userId}`;
      const response = await axios.get(urls);
      setPets(response.data.data.pets);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePetSelection = async (petId) => {
    setSelectedPet(petId);
  };

  const handleServiceSelection = (servico) => {
      setSelectedService(servico);
  };

  const handleHorarioSelection = (horario) => {
      setSelectHorarios(horario);
  
    if (selectedPet && selectedService && horario) {
      navigation.navigate('Calendar', {
        pet: selectedPet,
        servico: selectedService,
        horario: horario,
      });
    }
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
        {pets.map((pet) => (
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
          {servicosDoPetshop && servicosDoPetshop.length > 0 ? (
          servicosDoPetshop.map((servico) => (
      <TouchableOpacity
          key={servico.id}
          onPress={() => handleServiceSelection(servico)}
          style={{
          ...buttonStyle,
          backgroundColor: selectedService === servico ? 'purple' : 'white',
          }}
       >
        <TextDescri>Serviço: {servico.nome}</TextDescri>
      </TouchableOpacity>
  ))
) : (
  <TextDescri>Nenhum serviço disponível</TextDescri>
  )}
        </Container2>
      )}

      {selectedService && (
        <Container2>
          <Title>Selecione um horário:</Title>
          <Container3>
          {selectedHorario.length > 0 ? (
          selectedHorario.map((horario) => (
        <TouchableOpacity
          key={horario.id}
          onPress={() => handleHorarioSelection(horario)}
          style={{
          ...buttonStyle,
          backgroundColor: selectedHorario.includes(horario) ? 'purple' : 'white',
          }}>
          <TextDescri>{horario.horario}</TextDescri>
        </TouchableOpacity>
  ))
) : (
  <TextDescri>Nenhum horário disponível</TextDescri>
)}

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
