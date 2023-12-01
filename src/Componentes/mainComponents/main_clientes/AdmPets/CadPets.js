import React from 'react';
import { ButtonContainer, ButtonText, Container, InputArea, Title, ErrorMessage } from '../../../Estilos'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import URL from '../../../../config'


export default function CadastroPets({ navigation }) {

  const schema = yup.object({// verifica o erro e transmite a mensagem
    nome: yup.string().required("Digite o nome do seu Pet"),
    idade: yup.string().required("Digite a idade do seu Pet"),
    cor: yup.string().required("Digite a cor do seu Pet"),
    porte: yup.string().required("Digite o porte do seu Pet"),
    peso: yup.string().required("Digite o peso do seu Pet"),
    raca_id: yup.string().required("Digite a raça do seu Pet"),
    
  })

  // cria o formulario
  const { control, handleSubmit, formState: { errors } } = useForm({
                                                            resolver: yupResolver(schema)});
  
  //botao de envio
  async function handleSignIn(data) {
  
    try {
      const response = await axios.post(URL+'pets',{
        nome: data.nome,
        idade: data.idade,
        cor: data.cor,
        porte: data.porte,
        peso: data.peso,
        raca_id: data.raca_id,
        usuario_id: 1,
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
      <Title>Cadastro de Pets</Title>

      {errors.nome && <ErrorMessage>{errors.nome?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='nome'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="Nome" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.nome} />
        )}
      />

      {errors.idade && <ErrorMessage>{errors.idade?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='idade'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="idade" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.idade} />
        )}
      />

      {errors.cor && <ErrorMessage>{errors.cor?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='cor'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="cor" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.cor} />
        )}
      />

      {errors.porte && <ErrorMessage>{errors.porte?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='porte'
        render={({ field: { onChange, onBlur, value } }) => (
          <InputArea placeholder="porte" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.porte} />
        )}
      />

      {errors.peso && <ErrorMessage>{errors.peso?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='peso'
        render={({ field: { onChange, onBlur, value } }) => (
        <InputArea placeholder="peso" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.peso} />
        )}
      />  

      {errors.raca_id && <ErrorMessage>{errors.raca_id?.message}</ErrorMessage>}
      <Controller
        control={control}
        name='raca_id'
        render={({ field: { onChange, onBlur, value } }) => (
        <InputArea placeholder="raca_id" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.raca_id} />
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
