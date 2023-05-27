import React from 'react';
import { ButtonContainer, ButtonText, Container, InputArea, Title, ErrorMessage, PressBox } from "../../../../../Estilos"
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ButtonsContainer2, ContainerMain } from "../../../../estilos_main"

import { Text } from 'react-native';

const PerfilEstabelecimento = ({ navigation }) => {

  const schema = yup.object({
    nome: yup.string().required("Digite seu nome"),
    cnpj: yup.string().min(11, "O CNPJ tem pelo menos 11 caracteres").required("Digite seu CNPJ"),
    endereco: yup.string().required("Digite seu endereço"),
    cidade: yup.string().required("Digite sua cidade"),
    telefone: yup.string().min(11, "O numero deve conter DDD + 9 + oito digitos ").required("Digite seu telefone"),
    email: yup.string().email("E-mail invalido").required("Digite seu E-mail"),
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const widthButton = "120px";

  return (
    <Container>
    <PressBox onPress={Keyboard.dismiss}>
      <Title>Seu Perfil</Title>

      {errors.nome && <ErrorMessage>{errors.nome?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='nome'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Nome" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.nome} />
        )}
      />

      {errors.cnpj && <ErrorMessage>{errors.cnpj?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='cnpj'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Cnpj" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.cnpj} />
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
          <InputArea placeholder="Cidade" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.telefone} />
        )}
      />

      {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="E-mail" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.email} />
        )}
      />

      <ButtonContainer onPress={()=>window.alert("Enviado!!")}>
        <ButtonText>Atualizar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('TelaEstabelecimentos')}>
        <ButtonText>Voltar</ButtonText>
      </ButtonContainer>

    </PressBox>
  </Container>
  );
};

export default PerfilEstabelecimento;
