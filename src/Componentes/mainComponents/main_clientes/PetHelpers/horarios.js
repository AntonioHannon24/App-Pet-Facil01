import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
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
  const [selectedHorarios, setSelectedHorarios] = useState(route.params.horarios.data);
  const [servicosDoPetshop, setServicosDoPetshop] = useState(route.params.petshop.servico);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [petshopId, setpetshopId] = useState(route.params.petshop.id);

  

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const agendaConfirm = (date) => {
    setSelectedDate(date.toISOString());
    hideDatePicker();
  };


  const navigation = useNavigation();

  useEffect(() => {
    const getUserid = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log(selectedHorarios.length);
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
    setSelectedHorarios(horario)

    showDatePicker()
  };

  const handleConfirm = async () => {
    try {

      const agendamentoData = {
        pet_id: selectedPet,
        servico_id: selectedService.id,
        data_hora: selectedDate.slice(0, 10)+' '+selectedHorarios.horario,
        usuario_id: userId,
        estabelecimento_id: petshopId,
      };

      const response = await axios.post(`${URL}agendamentos`, agendamentoData);
      console.log('Response:', response.data);


      navigation.navigate('AgendamentosClientes');
    } catch (error) {
      console.log(error)
    }
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
            }}
          >
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
          <ScrollView
            contentContainerStyle={{ alignItems: 'center' }}
            showsVerticalScrollIndicator={false}
          >
            {selectedHorarios.length > 0 ? (
              selectedHorarios.map((horario) => (
                <TouchableOpacity
                  key={horario.id}
                  onPress={() => handleHorarioSelection(horario)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: selectedHorarios.includes(horario) ? 'purple' : 'white',
                    marginBottom: 10, 
                  }}
                >
                  <TextDescri>{horario.horario}</TextDescri>
                </TouchableOpacity>
              ))
            ) : (
              <TextDescri>Nenhum horário disponível</TextDescri>
            )}
          </ScrollView>
        </Container2>
      )}


      {selectedHorarios && (
        <Container2>
          {selectedDate && <Text>Data selecionada: {selectedDate}</Text>}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={agendaConfirm}
            onCancel={hideDatePicker}
          />
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
