import React from "react";
import { ButtonContainer, ButtonText } from "../../Estilos";
import { ContainerMain, IconLogin, ButtonsContainer, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import { View } from 'react-native';
import ContainerBotoes from "./containerBotoes";

const TelaEstabelecimentos = ({ navigation }) => {

  const width = "125px";
  const buttonWidth = "330px";

  const navigate = (screenName) =>{
    navigation.navigate(screenName)
  }

  return (
    <ContainerMain>     
     <ContainerBotoes navigate={navigate}/>
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
  )
};

export default TelaEstabelecimentos;