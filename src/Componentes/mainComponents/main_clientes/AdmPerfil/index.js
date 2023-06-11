import React from 'react';
import { ContainerMain, View} from "../Style";
import {TextContainer } from '../../estilos_main.js';
import { Text } from 'react-native';
import {IconCarteiraPet, CarteiraContainer, CarteiraText, Text1, PefilText} from './Style'


const AdmPerfil = ({ route }) => {

return (
    <ContainerMain>
      <TextContainer>
        <IconCarteiraPet source={require("../../img/profile.png")} />
      </TextContainer>
      <CarteiraText>Editar</CarteiraText>
      <View>
      <CarteiraContainer>
            <PefilText>
              <Text1>Nome:</Text1>
              <Text></Text>
            </PefilText>
            <PefilText>
              <Text1>CPF:</Text1>
              <Text></Text>
            </PefilText>
            <PefilText>
              <Text1>RG:</Text1>
              <Text></Text>
            </PefilText>
            <PefilText>
              <Text1>Email:</Text1>
              <Text></Text>
            </PefilText>
            <PefilText>
              <Text1>Data Nascimento:</Text1>
              <Text></Text>
            </PefilText>
            <PefilText>
              <Text1>Data de adesão:</Text1>
              <Text></Text>
            </PefilText>
            <PefilText>
              <Text1>Quantidade de Pets:</Text1>
              <Text></Text>
            </PefilText>
          </CarteiraContainer>
        </View>
    </ContainerMain>
  );
};

export default AdmPerfil;