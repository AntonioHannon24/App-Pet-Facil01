import React, { useState } from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, PetText } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js";
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import { Container, CalendarContainer, DateItem, DateText, ButtonContainer2, ConfirmationLine } from './Style';
import Calendar from './Calendar'; // Importe o componente do calendário
import FloatingScreen from './FloatingScreen';
import MeusAgendamentos from './MeusAgendamentos';
import { Text } from 'react-native';

const width = "110px";

const AgendamentosClientes = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFloatingScreenVisible, setFloatingScreenVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [confirmedDate, setConfirmedDate] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

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

  const pets = [
    { id: 1, name: 'Pet 1' },
    { id: 2, name: 'Pet 2' },
    { id: 3, name: 'Pet 3' },
  ];

  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require("../../img/profile.png")} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
          <PetTextContainer>
            <PetText><Text>Pet 1</Text></PetText>
            <PetText><Text>Pet 2</Text></PetText>
            <PetText><Text>Pet 3</Text></PetText>
          </PetTextContainer>
        </View>
      </TextContainer>
      <ButtonsContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate("TelaUser")}>Meu perfil</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate("PetHelpers")}>PetHelpers</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>

      <Container>
        <CalendarContainer>
        <Calendar />
        </CalendarContainer>
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

      {/* Botão para confirmar o agendamento */}
      <ButtonContainer2 width={width}>
        <ButtonText onPress={() => setIsConfirmed(true)}>Confirmar agendamento</ButtonText>
      </ButtonContainer2>

      <ButtonContainer2 width={width}>
        <ButtonText onPress={() => navigation.navigate("MeusAgendamentos")}>Meus Agendamentos</ButtonText>
      </ButtonContainer2>
    </ContainerMain>
  );
};

export default AgendamentosClientes;
