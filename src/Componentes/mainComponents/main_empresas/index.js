import React from "react";
import { ButtonContainer, ButtonText } from "../../Estilos";
import { ContainerMain, IconLogin, ButtonsContainer, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import { View } from 'react-native';

const TelaEstabelecimentos = ({ navigation }) => {

  const width = "125px";
  const buttonWidth = "330px";

  return (
    <ContainerMain>
      <TextContainer marginTop="20">
        <IconLogin source={require('../img/profile.png')} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
        </View>
      </TextContainer>


      <ButtonsContainer paddingLeft="4px">
        <ButtonContainer width={width}>
          <ButtonText>Administrativo</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate('EstabAgendamentos')}>Agenda</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={width}>
          <ButtonText onPress={() => navigation.navigate('EstabPublicacoes')}>Publicações</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>

      <ContainerMain>

        <ButtonsContainer2>
          <ButtonContainer width={buttonWidth}>
            <ButtonText onPress={() => navigation.navigate("PerfilEstabelecimento")}>Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={buttonWidth}>
            <ButtonText onPress={() => navigation.navigate("GerenciamentoFuncionarios")}
            >Gerenciamento de funcionarios</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={buttonWidth}>
            <ButtonText onPress={() => navigation.navigate("GerenciamentoServicos")}
            >Gerenciamento de servicos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={buttonWidth}>
            <ButtonText >Avaliações</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={buttonWidth}>
            <ButtonText >Outra Ideia</ButtonText>
          </ButtonContainer>
        </ButtonsContainer2>
      </ContainerMain>
    </ContainerMain>
  )
};

export default TelaEstabelecimentos;