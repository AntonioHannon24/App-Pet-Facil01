import React, { useState } from 'react';
import { Container, CalendarContainer, DateItem, DateText } from './Style';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const renderDateItem = (date) => {
    const isSelected = selectedDate === date;

    return (
      <DateItem onPress={() => handleDatePress(date)}>
        <DateText isSelected={isSelected}>{date}</DateText>
      </DateItem>
    );
  };

  const renderCalendar = () => {
    const daysInMonth = 31; // Número de dias no mês
    const weeksInMonth = Math.ceil(daysInMonth / 7); // Número de semanas no mês
  
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']; // Iniciais dos dias da semana
  
    const calendar = [];
  
    // Renderiza os dias da semana acima do calendário
    const weekDaysRow = weekDays.map((day) => (
      <DateItem key={day}>
        <DateText>{day}</DateText>
      </DateItem>
    ));
    calendar.push(<CalendarContainer key="week-days">{weekDaysRow}</CalendarContainer>);
  
    let counter = 1;
  
    for (let week = 0; week < weeksInMonth; week++) {
      const weekRow = [];
  
      for (let day = 0; day < 7; day++) {
        if (counter <= daysInMonth && day < 7) {
          const formattedDate = String(counter).padStart(2, '0').substring(0, 7);
          weekRow.push(renderDateItem(formattedDate));
          counter++;
        } else {
          weekRow.push(<DateItem key={`empty-${day}`} />);
        }
      }
  
      calendar.push(
        <CalendarContainer key={`week-${week}`}>{weekRow}</CalendarContainer>
      );
    }
  
    return calendar;
  };
  

  return <Container>{renderCalendar()}</Container>;
};

export default Calendar;
