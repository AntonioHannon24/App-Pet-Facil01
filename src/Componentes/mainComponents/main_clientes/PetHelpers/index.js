import React from 'react';
import { Text, ScrollView } from 'react-native'; // Importe ScrollView
import { ContainerMain, IconLogin, PetTextContainer, View, PetText } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js"
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomeEmpresa } from './Style'

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
  return (
    <ContainerMain>
      <ScrollView> {/* Adicione o ScrollView aqui */}
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
                <DescriText>Localização: {item.localizacao}</DescriText>
                <DescriText>Serviços: {item.servicos}</DescriText>
                <DescriText>Avaliações: {item.avaliacoes}</DescriText>
                <ViewButon>
                  <ButtonContainer2 width={width}>
                    <ButtonText2>Acessar</ButtonText2>
                  </ButtonContainer2>
                </ViewButon>
              </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
      </ScrollView> {/* Feche o ScrollView */}
    </ContainerMain>
  );
};

export default PetHelpers;