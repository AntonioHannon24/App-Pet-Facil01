import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CalendarContainer = styled.View`
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Cell = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-vertical: 5px;
  border-width: 1px;
  border-color: #ccc;
`;

export const SelectedCell = styled(Cell)`
  background-color: #e0e0e0;
`;
