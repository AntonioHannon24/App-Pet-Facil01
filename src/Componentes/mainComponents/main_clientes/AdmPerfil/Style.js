import styled from "styled-components/native";

export const IconCarteiraPet = styled.Image`
    align-items: center;
    width: 80px;
    height: 80px;
    margin-right: 30px;
    margin-left: 150px;
    margin-top: 20px;
`;

export const TutorInfoContainer = styled.View`
  flex-direction: row; // Define a direção das colunas
  align-items: center;
  margin-top: 20px;
`;

export const Divider = styled.View`
  flex: 1;
  background-color: #000000; // Cor do risco
  margin-horizontal: 1px;
`;

export const CarteiraText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    flex-wrap: wrap;
    width: 70%;
    margin-right: 30px;
    margin-left: 170px;
    margin-top: 12px;
`;

export const Text1 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const PefilText = styled.TouchableOpacity`
    margin-right: 12px;
    margin-bottom: 10px;
`;

export const TextContainer2 = styled.View`
    flex-direction: column;
    margin-top: 50px;
    margin-left: 50px;
`;
