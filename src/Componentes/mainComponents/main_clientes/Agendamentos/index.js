import React, { useState, useEffect } from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, HeaderContainer, HeaderText, Title, AgendamentoContainer, PetText, DataText } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js";
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import { Container, CalendarContainer, DateItem, DateText, ButtonContainer2, ConfirmationLine, TextContainer3 } from './Style';
import { TextContainer2, View2, DescriContainer2, DescriText, IconEmpresa, NomeEmpresa } from '../PetHelpers/Style.js';
import Calendar from './Calendar'; // Importe o componente do calendário
import MeusAgendamentos from './MeusAgendamentos';
import { Text, Linking, PanResponder, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config.js'

const width = "110px";

const AgendamentosClientes = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFloatingScreenVisible, setFloatingScreenVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [confirmedDate, setConfirmedDate] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [userId, setUserId] = useState(null);
  const [agendaClientes, setAgendaClientes] = useState([]);

  const handleDatePress = (date) => {
    if (isConfirmed) {
      return;
    }
    setSelectedDate(date);
    setFloatingScreenVisible(true);
  };

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
    setFloatingScreenVisible(false);
    // Marque a data como agendada e execute outras ações necessárias
  };

  const handleFloatingScreenClose = () => {
    setFloatingScreenVisible(false);
  };

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
      fetchAgendasUser();
    }
  }, [userId]);



  const fetchAgendasUser = async () => {
    try {
      const urls = `${URL}agendaClientes/${userId}`;
      const response = await axios.get(urls);
      setAgendaClientes(response.data.data);

    } catch (error) {
      console.error(error);
    }
  };

  const renderDateItem = (date) => {
    const isSelected = selectedDate === date;
    const confirmed = isConfirmed && isSelected;



    return (
      <DateItem onPress={() => handleDatePress(date)}>
        <DateText isSelected={isSelected} confirmed={confirmed}>
          {date}
          {confirmed && <ConfirmationLine />}
        </DateText>
      </DateItem>
    );
  };


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx < -50) {
        // Navegar para a tela "AgendamentosClientes" quando o gesto de deslizar para a esquerda for detectado
        navigation.navigate('PetHelpers');
      } else if (gestureState.dx > 50) {
        // Navegar para a tela "PetHelpers" quando o gesto de deslizar para a direita for detectado
        navigation.navigate('TelaUser');
      }
    },
    onPanResponderRelease: () => {
      // Reset do estado após o lançamento do gesto
    },
  });

  return (
    <ContainerMain {...panResponder.panHandlers}>
      <HeaderContainer>
        <HeaderText>PET HELPER</HeaderText>
      </HeaderContainer>
      <TextContainer>
        <IconLogin source={require("../../img/dog1.png")} />
        <View>
        </View>
      </TextContainer>
      <ButtonsContainer>
        <ButtonContainer width={"120px"}>
          <ButtonText onPress={() => navigation.navigate("TelaUser")}>Meu perfil</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={"120px"}>
          <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={"115px"}>
          <ButtonText onPress={() => navigation.navigate("PetHelpers")}>PetHelpers</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>

      <Container>
        <ScrollView>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, marginLeft: 100 }}>Meus Agendamentos</Text>
          {agendaClientes.map((agenda, index) => (
            <TextContainer3 key={index}>
              <View>
                <DescriContainer2>
                  <Text style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Data e Hora:</Text>{agenda.data_hora}
                  </Text>
                  <Text style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Status:</Text>{agenda.status}
                  </Text>
                  <Text style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pet:</Text>{agenda.pet_id}
                  </Text>
                  <Text style={{ marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Estabelecimento:</Text>{agenda.estabelecimento_id}
                  </Text>
                </DescriContainer2>
              </View>
            </TextContainer3>
          ))}
        </ScrollView>
      </Container>

      {/* Verifica se o FloatingScreen deve ser exibido */}
      {isFloatingScreenVisible && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}>
          <FloatingScreen
            pets={pets}
            onPetSelect={handlePetSelect}
            onClose={handleFloatingScreenClose}
          />
        </View>
      )}
    </ContainerMain>
  );
};

export default AgendamentosClientes;
