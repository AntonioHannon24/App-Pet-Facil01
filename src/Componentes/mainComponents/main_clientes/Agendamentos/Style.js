import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Header = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CalendarContainer = styled.View`
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Cell = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-vertical: 5px;
  border-width: 1px;
  border-color: #ccc;
`;

const SelectedCell = styled(Cell)`
  background-color: #e0e0e0;
`;