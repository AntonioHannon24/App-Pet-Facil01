import { Container, ButtonText, ButtonContainer, ButtonContainerForm, Title, InputArea,
          ErrorMessage, PressBox,ButtonText3 } from '../../Componentes/Estilos';
import { ButtonLogin, ButtonGreen, TextButtonLogin, ImageContainer, LoginImage, InputAreaLogin } from '../Style';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';




export default function TelaLogin  ({ navigation }) {

const [data,setData] = useState([])

/*
useEffect(()=>{
  fetch("http://192.168.1.106:3333/api/estabelecimentos")
  .then(response=>response.json())
  .then(data=>setData(data))
  .catch(err=>console.log(err))
})
*/


  const schema = yup.object({
    email: yup.string().email("E-mail invalido").required("Digite seu E-mail"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite sua senha!")
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleSignIn(data) { console.log(data) 
    navigation.navigate('TelaPrincipal')}

  return (
    <Container>
      <PressBox onPress={Keyboard.dismiss}>

        <Title>Login</Title>
        <ImageContainer>
          <LoginImage source={require('../img/login.png')}/>
        </ImageContainer>

        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputAreaLogin placeholder="Email" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.email} />
          )}
        />

        {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputAreaLogin secureTextEntry={true} placeholder="Digite sua senha" onChangeText={onChange} onBlur={onBlur} value={value} />
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