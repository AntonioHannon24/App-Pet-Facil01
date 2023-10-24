import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CalendarContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 40px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const DateItem = styled.TouchableOpacity`
  width: 50px; /* Ajuste a largura conforme necessário */
  height: 50px; /* Ajuste a altura conforme necessário */
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const DateText = styled.Text`
  color: ${({ isSelected, confirmed }) => (isSelected ? 'green' : confirmed ? 'gray' : 'black')};
  font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */
  position: relative;
`;

export const ConfirmationLine = styled.View`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: red;
  transform: rotate(-45deg);
`;

export const ButtonContainer2 = styled.TouchableOpacity`  
  padding: 10px;
  height: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

