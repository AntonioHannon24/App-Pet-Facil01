import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    // Função chamada quando uma célula do calendário é clicada
    const handleCellClick = (date) => {
      setSelectedDate(date);
      // Adicione aqui a lógica para realizar o agendamento com a data selecionada
      console.log('Agendamento para', date);
    };
  
    // Função para criar as células do calendário
    const renderCalendarCells = () => {
      // Obtenha o ano e mês atual
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
  
      // Obtenha o primeiro dia do mês
      const firstDay = new Date(currentYear, currentMonth, 1);
      const startDay = firstDay.getDay();
  
      // Obtenha o número de dias no mês
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const numDays = lastDay.getDate();
  
      // Array com os nomes dos dias da semana
      const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
      // Cria as células do calendário
      const calendarCells = [];
      let day = 1;
      for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < startDay) {
            row.push(
              <Cell key={`${i}-${j}`}>
                <Text>&nbsp;</Text>
              </Cell>
            );
          } else if (day > numDays) {
            break;
          } else {
            const date = new Date(currentYear, currentMonth, day);
            const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            row.push(
              <Cell
                key={`${i}-${j}`}
                onPress={() => handleCellClick(formattedDate)}
              >
                <Text>{day}</Text>
              </Cell>
            );
            day++;
          }
        }
        calendarCells.push(<Row key={i}>{row}</Row>);
      }
      return calendarCells;
    };
  
    return (
      <Container>
        <Header>Calendário de Agendamento</Header>
        <CalendarContainer>{renderCalendarCells()}</CalendarContainer>
      </Container>
    );
  };
  
  export default Calendar;