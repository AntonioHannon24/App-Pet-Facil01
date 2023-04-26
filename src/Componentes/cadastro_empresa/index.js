import React from 'react';

import { ButtonContainer, ButtonText, Container, InputArea, Title, ErrorMessage,PressBox } from '../Estilos.js';
import { useState } from 'react';
import { Keyboard ,Vibration } from 'react-native';

export default function Cadastro_emp({ navigation }) {

 
  const [nome,setNome]= useState(null)
  const [cnpj, setCnpj]= useState(null)
  const [endereco, setEndereco]= useState(null)
  const [cidade, setCidade]= useState(null)
  const [telefone, setTelefone]= useState(null)
  const [email, setEmail]= useState(null)
  
  const [errorMessage,setErrorMessage ]= useState(null)

  function verificaFormulario(){
    if(!nome && !cnpj && !endereco && !cidade && !telefone && !email){
      setErrorMessage("Todos os campos são obrigatórios*")
      Vibration.vibrate()
      
    }else{
      window.alert("Foi enviado o formulario!!")
      setErrorMessage(null);
      setNome(null);
      setCnpj(null);
      setEndereco(null);
      setCidade(null);
      setTelefone(null);
      setEmail(null);
    }
  }


  return (
    <Container>
      <PressBox onPress={Keyboard.dismiss}>
        <Title>Cadastro Empresa</Title>
        
        <ErrorMessage>{errorMessage}</ErrorMessage>      
        <InputArea placeholder="Nome" onChangeText={setNome}/>
        <InputArea placeholder="Cnpj" onChangeText={setCnpj}/>
        <InputArea placeholder="Endereço" onChangeText={setEndereco}/>
        <InputArea placeholder="Cidade" onChangeText={setCidade}/>
        <InputArea placeholder="Telefone" onChangeText={setTelefone}/>
        <InputArea placeholder="E-mail" onChangeText={setEmail}/>

        <ButtonContainer onPress={verificaFormulario}>
          <ButtonText>Cadastrar</ButtonText>
        </ButtonContainer>

        <ButtonContainer onPress={() => navigation.navigate('Login')}>
          <ButtonText>Voltar</ButtonText>
        </ButtonContainer>
      </PressBox>
    </Container>
  );
}
