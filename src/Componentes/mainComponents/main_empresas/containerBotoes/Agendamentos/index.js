import React, { useState } from 'react';
import { IconLogin } from '../../../estilos_main.js';
import { ButtonContainer, ButtonText } from "../../../../Estilos.js";
import { WelcomeText, TextContainer, ButtonsContainer, ContainerMain } from '../../../estilos_main.js';
import { Container, CalendarContainer, DateItem, DateText, ButtonContainer2, ConfirmationLine } from './Style.js';
import FloatingScreen from './FloatingScreen.js';
import { View } from 'react-native';
import ContainerBotoes from '../index.js';

const width = "110px";

const EstabAgendamentos = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFloatingScreenVisible, setFloatingScreenVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [confirmedDate, setConfirmedDate] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const navigate = (screenName) =>{
    navigation.navigate(screenName)
  }

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
      <ContainerBotoes navigate={navigate}/>
      <Container>
        <CalendarContainer>
          {renderDateItem('01')}
          {renderDateItem('02')}
          {renderDateItem('03')}
          {renderDateItem('04')}
          {renderDateItem('05')}
          {renderDateItem('06')}
          {renderDateItem('07')}
          {renderDateItem('08')}
          {renderDateItem('09')}
          {renderDateItem('10')}
          {renderDateItem('11')}
          {renderDateItem('12')}
          {renderDateItem('13')}
          {renderDateItem('14')}
          {renderDateItem('15')}
          {renderDateItem('16')}
          {renderDateItem('17')}
          {renderDateItem('18')}
          {renderDateItem('19')}
          {renderDateItem('20')}
          {renderDateItem('21')}
          {renderDateItem('22')}
          {renderDateItem('23')}
          {renderDateItem('24')}
          {renderDateItem('25')}
          {renderDateItem('26')}
          {renderDateItem('27')}
          {renderDateItem('28')}
          {renderDateItem('29')}
          {renderDateItem('30')}
          {renderDateItem('31')}
        </CalendarContainer>
      </Container>

      {isFloatingScreenVisible && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}>
          <FloatingScreen
            pets={pets}
            onPetSelect={handlePetSelect}
            onClose={handleFloatingScreenClose}
          />
        </View>
      )}

      <ButtonContainer2 width={width}>
        <ButtonText onPress={() => setIsConfirmed(true)}>Confirmar agendamento</ButtonText>
      </ButtonContainer2>

      <ButtonContainer2 width={width}>
        <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Meus Agendamentos</ButtonText>
      </ButtonContainer2>
    </ContainerMain>
  );
};

export default EstabAgendamentos;

