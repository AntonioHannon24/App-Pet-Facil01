import {
  Container, ButtonText, ButtonContainer, ButtonContainerForm, Title, InputArea,
  ErrorMessage, PressBox, ButtonText3
} from '../../Estilos';
import { ButtonLogin, ButtonGreen, TextButtonLogin, ImageContainer, LoginImage, InputAreaLogin } from '../Style';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../config';


export default function TelaLogin({ navigation }) {

  const [data, setData] = useState([])


  const schema = yup.object({
    email: yup.string().email("E-mail invalido").required("Digite seu E-mail"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite sua senha!")
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleSignIn(data) {
    try {
      const response = await axios.post(URL+'login',{
        email: data.email,
        password: data.password
      });

      if (response.status === 200) {
        //AsyncStorage.setItem('apiToken', response.data.token.token);
       // AsyncStorage.setItem('userId', response.data.user.id.toString());


      
          try {
            await AsyncStorage.setItem('userId', response.data.user.id.toString());
          } catch (error) {
             console.log(error.message);
          }
        
        // ... armazenar outras informações do usuário se necessário

        navigation.navigate('TelaUser');
        console.log(response.data.user.id + 'este aqui');
      } else if (response.status === 401) {
        console.log(response.data.message);
      } else {
        console.log("Erro desconhecido");
      }
      console.log(response.data.message);
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um código de erro (por exemplo, 401 não autorizado).
        console.error('Erro no servidor:', error.response.data);
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor.
        console.error('Sem resposta do servidor');
      } else {
        // Ocorreu um erro ao configurar a solicitação.
        console.error('Erro ao configurar a solicitação', error.message);
      }
    }
  }


  return (
    <Container>
      <PressBox onPress={Keyboard.dismiss}>

        <Title>Login</Title>
        <ImageContainer>
          <LoginImage source={require('../img/profile.png')} />
        </ImageContainer>

        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputAreaLogin placeholder="E-mail" onChangeText={onChange} onBlur={onBlur}
              value={value} err={errors.email} textAlign="center" />
          )}
        />

        {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputAreaLogin secureTextEntry={true} placeholder="Digite sua senha" textAlign="center"
              onChangeText={onChange} onBlur={onBlur} value={value} />
          )}
        />

        <ButtonContainerForm onPress={() => navigation.navigate('RecuperarSenha')}>
          <ButtonText3>Esqueci minha senha</ButtonText3>
        </ButtonContainerForm>

        <ButtonLogin onPress={handleSubmit(handleSignIn)}>
          <TextButtonLogin>Entrar</TextButtonLogin>
        </ButtonLogin>

        <ButtonGreen onPress={() => navigation.navigate('Cadastro')}>
          <ButtonText>Cadastro</ButtonText>
        </ButtonGreen>

        <ButtonGreen onPress={() => navigation.navigate('Login_Estabelecimento')}>
          <ButtonText>Sou Empresa</ButtonText>
        </ButtonGreen>

      </PressBox>
    </Container>
  );
}