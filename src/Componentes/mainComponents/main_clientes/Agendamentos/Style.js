import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled.View`
  justify-content: center;
`;

export const CalendarContainer = styled.View`
margin-top: 5px;
border: solid;
border-radius: 8px;
border-bottom-left-radius: 10px;
margin-left: 10px;
margin-right: 10px;
border-color: purple;
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

export const CalendarButton = styled(TouchableOpacity)`
  background-color: #007BFF;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`;

export const TextContainer3 = styled.View`
    margin-top: 5px;
    border: solid;
    border-color: purple;
    border-radius: 8px;
    border-bottom-left-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

