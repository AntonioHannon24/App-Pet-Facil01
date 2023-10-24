import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styled from 'styled-components/native';
import {Container } from "./Style";

const CalendarButton = styled(TouchableOpacity)`
  background-color: #007BFF;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`;

const Calendar = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date.toISOString()); // Armazene a data no formato desejado
    hideDatePicker();
  };

  return (
    <Container>
      <CalendarButton onPress={showDatePicker}>
        <ButtonText>Calendário</ButtonText>
      </CalendarButton>
      {selectedDate && <Text>Data selecionada: {selectedDate}</Text>}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // Pode ser "date", "time" ou "datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};

export default Calendar;
