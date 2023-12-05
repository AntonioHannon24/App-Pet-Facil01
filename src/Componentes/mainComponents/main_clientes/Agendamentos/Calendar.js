import React, { useState, useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Container, CalendarButton, ButtonText } from "./Style";
import { Text } from 'react-native';

const Calendar = ({ route }) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = route.params.navigation;

  useEffect(() => {
    showDatePicker(); // Chama automaticamente ao renderizar o componente
  }, []);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    // Altere esta linha para formatar a data conforme necessário
    setSelectedDate(date.toISOString());
    hideDatePicker();
  
    // Volte para a tela anterior passando a data selecionada
    navigation.goBack();
  };

  return (
    <Container>
      {selectedDate && <Text>Data selecionada: {selectedDate}</Text>}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};

export default Calendar;