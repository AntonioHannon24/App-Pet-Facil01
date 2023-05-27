import React from "react";
import { ButtonContainer, ButtonText } from "../../Estilos";
import { ContainerMain, IconLogin, ButtonsContainer, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import ContainerBotoes from "./containerBotoes";

const TelaEstabelecimentos = ({ navigation }) => {

  const width = "125px";
  const height = "45px";
  const buttonWidth = "330px";

  const navigate = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <ContainerMain>
      <ContainerBotoes navigate={navigate} />
      <ButtonsContainer2>
        <ButtonContainer width={buttonWidth} height={height}>
          <ButtonText onPress={() => navigate("PerfilEstabelecimento")}
          >Perfil Estabelecimento</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={buttonWidth} height={height}>
          <ButtonText onPress={() => navigate("GerenciamentoFuncionarios")}
          >Gerenciamento de funcionarios</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={buttonWidth} height={height}>
          <ButtonText onPress={() => navigate("GerenciamentoServicos")}
          >Gerenciamento de servicos</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={buttonWidth}height={height}>
          <ButtonText >Avaliações</ButtonText>
        </ButtonContainer>
      </ButtonsContainer2>
    </ContainerMain>
  )
};

export default TelaEstabelecimentos;