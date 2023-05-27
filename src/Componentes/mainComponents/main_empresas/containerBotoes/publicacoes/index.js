import React from 'react';
import { ContainerMain, ButtonsContainer2 } from "../../../estilos_main";
import { Text } from 'react-native';
import ContainerBotoes from '..';

const EstabPublicacoes = ({ navigation }) => {
    const navigate = (screenName) =>{
        navigation.navigate(screenName)
      }

    return (
        <ContainerMain>
            <ContainerBotoes navigate={navigate}/>
            <Text>Publicações</Text>
        </ContainerMain>
    )
};

export default EstabPublicacoes;