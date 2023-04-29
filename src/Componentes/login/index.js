import { Container, ButtonText, ButtonContainer, Title, InputArea, ButtonText2, ErrorMessage, PressBox } from '../Estilos';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function TelaLogin({ navigation }) {

  const schema = yup.object({
    email: yup.string().email("E-mail invalido").required("Digite seu E-mail"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite sua senha!")
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleSignIn(data) { console.log(data) }

  return (
    <Container>
      <PressBox onPress={Keyboard.dismiss}>

        <Title>Login</Title>

        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputArea placeholder="Email" onChangeText={onChange} onBlur={onBlur} value={value} err={errors.email} />
          )}
        />

        {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, onBlur, value } }) => (
            <InputArea secureTextEntry={true} placeholder="Digite sua senha" onChangeText={onChange} onBlur={onBlur} value={value} />
          )}
        />

        <ButtonContainer onPress={() => navigation.navigate('RecuperarSenha')}>
          <ButtonText2>Esqueci minha senha</ButtonText2>
        </ButtonContainer>

        <ButtonContainer onPress={handleSubmit(handleSignIn)}>
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