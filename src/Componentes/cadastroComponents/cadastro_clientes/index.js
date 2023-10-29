import React from 'react';
import { ButtonContainer, ButtonText, Container, InputArea, Title, ErrorMessage } from '../../Estilos';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';

export default function Cadastro({ navigation }) {

  const schema = yup.object({// verifica o erro e transmite a mensagem
    nome: yup.string().required("Digite seu nome"),
    cpf: yup.string().min(11, "O CPF tem 11 caracteres").required("Digite seu CPF"),
    endereco: yup.string().required("Digite seu endereço"),
    cidade: yup.string().required("Digite sua cidade"),
    telefone: yup.string().min(11, "O numero deve conter DDD + 9 + oito digitos ").required("Digite seu telefone"),
    email: yup.string().email("E-mail invalido").required("Digite seu E-mail"),
    password: yup.string().required("Digite sua senha"),
  })

  // cria o formulario
  const { control, handleSubmit, formState: { errors } } = useForm({
                                                            resolver: yupResolver(schema)});
  
  //botao de envio
  async function handleSignIn(data) {
    console.log(data)
    try {
      const response = await axios.patch('http://192.168.1.75:3333/api/usuarios', {
        nome: data.nome,
        cpf: data.cpf,
        email: data.email,
        cidade_id: data.cidade,
        password: data.password,
      });

      if (response.status === 200) {
        //navigation.navigate('te');
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
      <Title>Cadastro Cliente</Title>

      {errors.nome && <ErrorMessage>{errors.nome?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='nome'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Nome" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.nome} />
        )}
      />

      {errors.cpf && <ErrorMessage>{errors.cpf?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='cpf'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Cpf" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.cpf} />
        )}
      />

      {errors.endereco && <ErrorMessage>{errors.endereco?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='endereco'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Endereço" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.endereco} />
        )}
      />

      {errors.cidade && <ErrorMessage>{errors.cidade?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='cidade'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Cidade" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.cidade} />
        )}
      />

      {errors.telefone && <ErrorMessage>{errors.telefone?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='telefone'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Telefone" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.telefone} />
        )}
      />  

      {errors.email && <ErrorMessage>{errors.email?.email}</ErrorMessage>}
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="email" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.email} />
        )}
      />

      {errors.password && <ErrorMessage>{errors.password?.password}</ErrorMessage>}
      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="password" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.password} />
        )}
      />

      <ButtonContainer >
        <ButtonText onPress={handleSubmit(handleSignIn)}>Cadastrar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Voltar</ButtonText>
      </ButtonContainer>
      
    </Container>
  );
}
