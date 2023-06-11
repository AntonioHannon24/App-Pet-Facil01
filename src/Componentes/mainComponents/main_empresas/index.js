import React from "react";
import { ButtonContainer, ButtonText } from "../../Estilos";
import { ContainerMain, IconLogin, ButtonsContainer, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import {View} from "../../Estilos"


const TelaEstabelecimentos = ({ navigation }) => {

  return (
    <ContainerMain>
       <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
        </View>
      </TextContainer>
    </ContainerMain>
  )
};

export default TelaEstabelecimentos;