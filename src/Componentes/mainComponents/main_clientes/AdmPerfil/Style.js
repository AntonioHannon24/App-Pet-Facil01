import styled from "styled-components/native";

export const IconCarteiraPet = styled.Image`
    align-items: center; /* Adicionado para centralizar a imagem */
    width: 80px;
    height: 80px;
    margin-top: 20px;
`;

export const TutorInfoContainer = styled.View`
  align-items: center; /* Adicionado para centralizar o TutorInfoContainer */
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
    margin-top: 12px;
    text-align: center;
`;

export const Text1 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;

export const PefilText = styled.TouchableOpacity`
    margin-right: 12px;
    margin-bottom: 10px;
`;

export const TextContainer2 = styled.View`
    flex-direction: column;
    align-items: center; /* Adicionado para centralizar os elementos na coluna */
    margin-top: 150px;
`;

// Adicionando um novo estilo para o botão Editar
export const EditButton = styled.TouchableOpacity`
    margin-top: 20px;
    align-items: center;
    align-items: center;
    
`;

// Adicionando estilo para o texto dentro do botão Editar
export const EditButtonText = styled.Text`
    font-size: 16px;
    color: #007BFF; 
`;

