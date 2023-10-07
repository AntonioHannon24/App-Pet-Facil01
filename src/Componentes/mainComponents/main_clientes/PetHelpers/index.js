import React from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, PetText } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js"
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomeEmpresa } from './Style'
import { ScrollView } from 'react-native';
import {Text , Linking, PanResponder } from 'react-native';

const width = "110px";

const data = [
  {
    nomeEmpresa: 'PetShop 1',
    localizacao: 'teste',
    servicos: 'teste',
    avaliacoes: 'teste',
  },
  {
    nomeEmpresa: 'PetShop 2',
    localizacao: 'teste2',
    servicos: 'teste2',
    avaliacoes: 'teste2',
  },
  {
    nomeEmpresa: 'PetShop 3',
    localizacao: 'teste3',
    servicos: 'teste3',
    avaliacoes: 'teste3',
  },
  {
    nomeEmpresa: 'PetShop 4',
    localizacao: 'teste4',
    servicos: 'teste4',
    avaliacoes: 'teste4',
  },
  {
    nomeEmpresa: 'PetShop 5',
    localizacao: 'teste5',
    servicos: 'teste5',
    avaliacoes: 'teste5',
  },
  {
    nomeEmpresa: 'PetShop 6',
    localizacao: 'teste6',
    servicos: 'teste6',
    avaliacoes: 'teste6',
  },
];

const PetHelpers = ({ navigation }) => {

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx < -50) {
        // Navegar para a tela "AgendamentosClientes" quando o gesto de deslizar para a esquerda for detectado
        navigation.navigate('TelaUser');
      } else if (gestureState.dx > 50) {
        // Navegar para a tela "PetHelpers" quando o gesto de deslizar para a direita for detectado
        navigation.navigate('AgendamentosClientes');
      }  
    },
    onPanResponderRelease: () => {
      // Reset do estado após o lançamento do gesto
    },
  });

  return (
    <ContainerMain {...panResponder.panHandlers}>
      <ScrollView>
        <TextContainer>
          <IconLogin source={require("../../img/profile.png")} />
          <View>
            <WelcomeText>Bem-vindo usuário(a), e sua Pet Family</WelcomeText>
            <PetTextContainer>
              <PetText><Text>Pet 1</Text></PetText>
              <PetText><Text>Pet 2</Text></PetText>
              <PetText><Text>Pet 3</Text></PetText>
            </PetTextContainer>
          </View>
        </TextContainer>
        <ButtonsContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={() => navigation.navigate("TelaUser")}>Meu perfil</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
          </ButtonContainer>
          <ButtonContainer width={width}>
            <ButtonText onPress={() => navigation.navigate("PetHelpers")} >PetHelpers</ButtonText>
          </ButtonContainer>
        </ButtonsContainer>

        {data.map((item, index) => (
          <TextContainer2 key={index}>
            <IconEmpresa source={require("../../img/profile.png")} />
            <View2>
              <NomeEmpresa>{item.nomeEmpresa}</NomeEmpresa>
              <DescriContainer2>
                <DescriText><Text>Localização:</Text> {item.localizacao}</DescriText>
                <DescriText><Text>Serviços:</Text> {item.servicos}</DescriText>
                <DescriText><Text>Avaliações:</Text>{item.avaliacoes}</DescriText>
                <ViewButon>
                  <ButtonContainer2 width={width}>
                    <ButtonText2>Acessar</ButtonText2>
                  </ButtonContainer2>
                </ViewButon>
              </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
      </ScrollView>
    </ContainerMain>
  );
};

export default PetHelpers;
