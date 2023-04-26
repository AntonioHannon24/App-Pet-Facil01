import React from 'react';

import { ButtonContainer, ButtonText, Container, InputArea, Title } from '../Estilos.js';

export default function Cadastro_emp() {
  return (
    <Container>
      <Title>Cadastro Empresa</Title>
      
      <InputArea placeholder="Nome"/>
      <InputArea placeholder="Cnpj"/>
      <InputArea placeholder="Endereço"/>
      <InputArea placeholder="Cidade"/>
      <InputArea placeholder="Telefone"/>
      <InputArea placeholder="E-mail"/>

      <ButtonContainer>
        <ButtonText>Cadastrar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Voltar</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
