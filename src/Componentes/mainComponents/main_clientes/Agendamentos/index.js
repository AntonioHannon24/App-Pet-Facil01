import React, { useState } from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, PetText } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js";
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import {Container, CalendarContainer, DateItem, DateText, ButtonContainer2, ConfirmationLine} from './Style'
import Calendar from './Calendar'; // Importe o componente do calendário
//import * as Styles from './styles';

const width = "110px";

const AgendamentosClientes = ({ navigation }) => {
const [selectedDate, setSelectedDate] = React.useState(null);
const [confirmedDate, setConfirmedDate] = useState(null);
const [isConfirmed, setIsConfirmed] = useState(false);

const handleDatePress = (date) => {
  if (isConfirmed) {
    return; // O agendamento já foi confirmado, não faça nenhuma alteração
  }
  setSelectedDate(date);
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

  
  const confirmAgendamento = () => {
    if (selectedDate) {
      setConfirmedDates([...confirmedDates, selectedDate]);
      setIsConfirmed(true);
    }
  };
  

  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require("../../img/profile.png")} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
          <PetTextContainer>
            <PetText>Pet 1</PetText>
            <PetText>Pet 2</PetText>
            <PetText>Pet 3</PetText>
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

      {/* Coloque o código do calendário aqui */}
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

      <ButtonContainer2 width={width}>
        <ButtonText onPress={() => setIsConfirmed(true)}>Confirmar agendamento</ButtonText>
      </ButtonContainer2>



      <ButtonContainer2 width={width}>
          <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Meus Agendamentos</ButtonText>
      </ButtonContainer2>
    </ContainerMain>
  );
};

export default AgendamentosClientes;