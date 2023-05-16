import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CalendarContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid black;
`;

const DateItem = styled.TouchableOpacity`
  width: 50px; /* Ajuste a largura conforme necessário */
  height: 50px; /* Ajuste a altura conforme necessário */
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const DateText = styled.Text`
  color: ${({ isSelected }) => (isSelected ? 'green' : 'black')};
  font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
`;

export { Container, CalendarContainer, DateItem, DateText };
