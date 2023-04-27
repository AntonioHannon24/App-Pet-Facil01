import React from 'react';
import { ButtonContainer, ButtonText, Container, InputArea, Title } from '../Estilos';

export default function RecuperarSenha() {
  return (
    <Container>
      <Title>Recuperar senha</Title>
      <InputArea placeholder="Digite sua última senha" secureTextEntry={true} />
      <InputArea placeholder="Digite sua nova senha" secureTextEntry={true}/>
      <InputArea placeholder="Confirme sua nova senha" secureTextEntry={true}/>
      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Confirmar</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
