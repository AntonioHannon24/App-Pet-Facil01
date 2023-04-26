import { Container, ButtonText ,ButtonContainer, Title,InputArea, ButtonText2, ErrorMessage, PressBox } from '../Estilos';
import { useState } from 'react';
import { Vibration, Keyboard } from 'react-native';

export default function TelaLogin({ navigation }) {

  const [email,setEmail]= useState(null)
  const [password, setPassword]= useState(null)
  const [errorMessage,setErrorMessage ]= useState(null)

  function verificarLogin(){
    if(!email && !password){
      setErrorMessage("Campo obrigatório*")
      Vibration.vibrate()
      
    }else{
      navigation.navigate('TelaPrincipal');
      setErrorMessage(null);
      setEmail(null);
      setPassword(null);
    }
  }

  return (
  <Container>
    <PressBox onPress={Keyboard.dismiss}>
          <Title>Login</Title>
              <ErrorMessage>{errorMessage}</ErrorMessage>
          <InputArea placeholder="Email" onChangeText={setEmail}/>
              <ErrorMessage>{errorMessage}</ErrorMessage>      
          <InputArea placeholder="Senha" secureTextEntry={true} onChangeText={setPassword}/>
      <ButtonContainer onPress={() => navigation.navigate('RecuperarSenha')}>
         <ButtonText2>Esqueci minha senha</ButtonText2>
      </ButtonContainer>

      <ButtonContainer onPress={verificarLogin}>
        <ButtonText>Entrar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Cadastro')}>
        <ButtonText>Cadastro</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Cadastro_emp')}>
        <ButtonText>Cadastro Empresa</ButtonText>
      </ButtonContainer>
    </PressBox>
      
  </Container>
  );
}