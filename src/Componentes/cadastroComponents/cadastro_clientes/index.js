import React from 'react';
import { ButtonContainer, ButtonText, Container, InputArea, Title, ErrorMessage } from '../../Estilos';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Cadastro({ navigation }) {

  const schema = yup.object({// verifica o erro e transmite a mensagem
    nome: yup.string().required("Digite seu nome"),
    cpf: yup.string().min(11, "O CPF tem 11 caracteres").required("Digite seu CPF"),
    endereco: yup.string().required("Digite seu endereço"),
    cidade: yup.string().required("Digite sua cidade"),
    telefone: yup.string().min(11, "O numero deve conter DDD + 9 + oito digitos ").required("Digite seu telefone"),
  })

  // cria o formulario
  const { control, handleSubmit, formState: { errors } } = useForm({
                                                            resolver: yupResolver(schema)});
  
  //botao de envio
  function handleSignIn(data) { console.log(data) }

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

      <ButtonContainer >
        <ButtonText onPress={handleSubmit(handleSignIn)}>Cadastrar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Voltar</ButtonText>
      </ButtonContainer>
      
    </Container>
  );
}
