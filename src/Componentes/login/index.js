import { Container, ButtonText ,ButtonContainer, Title,InputArea, ButtonText2 } from '../Estilos';

export default function TelaLogin({ navigation }) {

  return (
    <Container>
      <Title>Login</Title>
    
      <InputArea placeholder="Email"/>
      <InputArea placeholder="Senha" secureTextEntry={true}/>

      <ButtonContainer onPress={() => navigation.navigate('RecuperarSenha')}>
         <ButtonText2>Esqueci minha senha</ButtonText2>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('TelaPrincipal')}>
        <ButtonText>Entrar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Cadastro')}>
        <ButtonText>Cadastro</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Cadastro_emp')}>
        <ButtonText>Cadastro Empresa</ButtonText>
      </ButtonContainer>
    </Container>
  );
}
