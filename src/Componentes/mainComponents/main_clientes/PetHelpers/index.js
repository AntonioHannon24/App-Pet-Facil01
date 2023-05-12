import React from 'react';
import { Text } from 'react-native';
import {ContainerMain, IconLogin , PetTextContainer, View, PetText} from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js"
import { WelcomeText,TextContainer, ButtonsContainer} from '../../estilos_main.js';
import {TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomeEmpresa} from './Style'
//import * as Styles from './styles';

const width = "110px";

const PetHelpers = ({ navigation }) => {
  return (
    <ContainerMain>
      <TextContainer>
        <IconLogin source={require("../../img/profile.png")} />
        <View>
          <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
          <PetTextContainer>
            <PetText>Pet 1</PetText>
            <PetText>Pet 2</PetText>
            <PetText>Pet 3</PetText>
          </PetTextContainer>
        </View>
      </TextContainer>
      <ButtonsContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navigation.navigate("TelaUser")}>Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={()=> navigation.navigate("PetHelpers")} >PetHelpers</ButtonText>
          </ButtonContainer>
      </ButtonsContainer>

      <TextContainer2>
        <IconEmpresa source={require("../../img/profile.png")} />
        <View2>
          <NomeEmpresa>PetShop 1</NomeEmpresa>
          <DescriContainer2>
            <DescriText>Localização: teste</DescriText>
            <DescriText>Serviços: teste</DescriText>
            <DescriText>Avaliações: teste</DescriText>
            <ViewButon>
              <ButtonContainer2 width={width}>
                <ButtonText2>Acessar</ButtonText2>
              </ButtonContainer2>
            </ViewButon>
          </DescriContainer2>
        </View2>
      </TextContainer2>
      <TextContainer2>
      <IconEmpresa source={require("../../img/profile.png")} />
        <View2>
          <NomeEmpresa>PetShop 1</NomeEmpresa>
          <DescriContainer2>
            <DescriText>Localização: teste</DescriText>
            <DescriText>Serviços: teste</DescriText>
            <DescriText>Avaliações: teste</DescriText>
            <ViewButon>
              <ButtonContainer2 width={width}>
                <ButtonText2>Acessar</ButtonText2>
              </ButtonContainer2>
            </ViewButon>
          </DescriContainer2>
        </View2>
      </TextContainer2>  
    </ContainerMain>
  );
};

export default PetHelpers;