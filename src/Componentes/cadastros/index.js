import React from 'react';
import {ButtonContainer, ButtonText, Container, InputArea, Title } from '../Estilos';

export default function Cadastro() {
  return (
    <Container>
      <Title>Cadastro Cliente</Title>
      <InputArea placeholder="Nome"/>
      <InputArea placeholder="Cpf"/>
      <InputArea placeholder="Endereço"/>
      <InputArea placeholder="Cidade"/>
      <InputArea placeholder="Telefone"/>
      <InputArea placeholder="Pet"/>
      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Cadastrar</ButtonText>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonText>Voltar</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
