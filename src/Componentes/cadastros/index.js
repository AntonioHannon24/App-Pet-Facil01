import React from 'react';
import {ButtonContainer, ButtonText, Container, InputArea, Title } from '../Estilos';

export default function Cadastro({ navigation }) {
  return (
    <Container>
      <Title>Cadastro Cliente</Title>
      <InputArea placeholder="Nome"/>
      <InputArea placeholder="Cpf"/>
      <InputArea placeholder="Endereço"/>
      <InputArea placeholder="Cidade"/>
      <InputArea placeholder="Telefone"/>
      
      <ButtonContainer >
        <ButtonText>Cadastrar</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Voltar</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
