import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Container,Title,ServicoItem,ServicoText,View2,Container2,Container3,ButtonContainer2,buttonStyle,TextDescri} from './Style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config';

const servicosDisponiveis = ['Banho', 'Banho e Tosa', 'Tosa Higiênica'];

const horariosDisponiveis = ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

const ServicosDisponiveis = ({ route, onClose }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [userId, setUserId] = useState(null);
 
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [pets, setPets] = useState([]);

  const [servicosDoPetshop, setServicosDoPetshop] = useState([]);
  const [horariosDoPetshop, setHorariosDoPetshop] = useState([]);

  const navigation = useNavigation();

  const [selectedPetshop, setSelectedPetshop] = useState(null);

  useEffect(() => {
    if (route.params && route.params.petshop) {
      setSelectedPetshop(route.params.petshop);
    }
  }, [route.params]);

  


  // Exemplo de recuperação do token na tela de Serviços Disponíveis
  useEffect(() => {
    const getUserid = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
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
        console.log('Dados da API obtidos com sucesso:', response.data.data.pets);

    } catch (error) {
      console.error(error);
    }
  };


  const handlePetSelection = async (petId) => {
  setSelectedPet(petId);

  try {
    // Substitua 'ID_DO_SEU_PETSHOP' pelo ID do petshop selecionado.
    const response = await axios.get(URL + 'estabelecimentos');

    if (response.data && response.data.servicos) {
      setServicosDoPetshop(response.data.servicos);
    } else {
      console.log('Dados de response ou servicos estão indefinidos');
    }
  } catch (error) {
    console.error('Erro ao obter serviços do petshop:', error.message);
  }
  };

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  // Substitua 'ID_DO_SEU_PETSHOP' e 'ID_DO_SEU_SERVICO' pelos IDs do petshop e serviço selecionados.
  if (selectedPetshop && service) {
    axios.get(URL + `estabelecimentos/${selectedPetshop.id}/horarios?servico=${service.id}`)
      .then((response) => {
        setHorariosDoPetshop(response.data.horarios);
      })
      .catch((error) => {
        console.error('Erro ao obter horários do petshop:', error.message);
      });
  }
};

const handleHorarioSelection = (horario) => {
  setSelectedHorario(horario);

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
          <TextDescri>{servico.nome}</TextDescri>
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
      {horariosDoPetshop && horariosDoPetshop.length > 0 ? (
        horariosDoPetshop.map((horario) => (
          <TouchableOpacity
            key={horario}
            onPress={() => handleHorarioSelection(horario)}
            style={{
              ...buttonStyle,
              backgroundColor: selectedHorario === horario ? 'purple' : 'white',
            }}
          >
            <TextDescri>{horario}</TextDescri>
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
