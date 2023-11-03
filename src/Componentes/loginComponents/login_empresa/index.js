import { Container, ButtonText, ButtonContainer, ButtonContainerForm, Title, InputArea,
          ErrorMessage, PressBox,ButtonText3 } from '../../Estilos';
import { ButtonLogin, ButtonGreen, TextButtonLogin, ImageContainer, LoginImage, InputAreaLogin } from '../Style';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
import axios from 'axios';
import URL from '../../../config';


export default function LoginEstabelecimento  ({ navigation }) {

const [data,setData] = useState([])


  const schema = yup.object({
    email: yup.string().email("E-mail invalido").required("Digite seu E-mail"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite sua senha!")
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleSignIn(data) {
    console.log(data)
    try {
      const response = await axios.post(URL+'loginEstabelecimento',{
        email: data.email,
        password: data.password
      });

      if (response.status === 200) {
        
        // AsyncStorage.setItem('apiToken', response.data.token.token)
        // AsyncStorage.setItem('type', response.data.token.type)
        // AsyncStorage.setItem('idUser', response.data.user.id);
        // AsyncStorage.setItem('sessao', 1); // 0 ou null que dizer que o usuário esta deslogado; 1  logado

        navigation.navigate('TelaEstabelecimentos');
        console.log(response.data.message);
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

        <Title>Bem vindo PetHelper</Title>
        <ImageContainer>
          <LoginImage source={require('../img/profile.png')}/>
        </ImageContainer>

        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputAreaLogin placeholder="E-mail" textAlign="center" onChangeText={onChange} 
                                        onBlur={onBlur} value={value} err={errors.email} />
          )}
        />

        {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputAreaLogin secureTextEntry={true} placeholder="Digite sua senha"textAlign="center"  
                                            onChangeText={onChange} onBlur={onBlur} value={value}/>
          )}
        />

        <ButtonContainerForm onPress={() => navigation.navigate('RecuperarSenha')}>
          <ButtonText3>Esqueci minha senha</ButtonText3>
        </ButtonContainerForm>

        <ButtonLogin onPress={handleSubmit(handleSignIn)}>
          <TextButtonLogin>Entrar</TextButtonLogin>
        </ButtonLogin>

        <ButtonGreen onPress={() => navigation.navigate('Login')}>
          <ButtonText>Sou Cliente</ButtonText>
        </ButtonGreen>

      </PressBox>
    </Container>
  );
}