import React, { useState } from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, PetText } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js"
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import { TextContainer2, View2, DescriContainer2, DescriText, IconEmpresa, NomeEmpresa } from './Style'
import { ScrollView } from 'react-native';
import {Text , Linking, PanResponder, TouchableOpacity } from 'react-native';
import ServicosDisponiveis from './horarios';


const width = "110px";

const data = [
  {
    nomeEmpresa: 'PetShop 1',
    localizacao: 'teste',
    servicos: ['banho', 'tosa'],
    avaliacoes: 'teste',
  },
  {
    nomeEmpresa: 'PetShop 2',
    localizacao: 'teste',
    servicos: ['banho', 'tosa', 'banho + tosa'],
    avaliacoes: 'teste',
  },
  {
    nomeEmpresa: 'PetShop 3',
    localizacao: 'teste',
    servicos: ['banho', 'tosa', 'banho + tosa'],
    avaliacoes: 'teste',
  },
];

const PetHelpers = ({ navigation }) => {

  const [isServicosFlutuanteVisible, setServicosFlutuanteVisible] = useState(false);
  const [selectedServico, setSelectedServico] = useState(null);

  const handleOpenServicosFlutuante = () => {
    setServicosFlutuanteVisible(true);
  };

  const handleSelectServico = (servico) => {
    setSelectedServico(servico);
    setServicosFlutuanteVisible(false);
  };

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
            <TouchableOpacity onPress={handleOpenServicosFlutuante}> 
              <IconEmpresa source={require("../../img/profile.png")} />
            </TouchableOpacity>
            <View2>
              <NomeEmpresa>{item.nomeEmpresa}</NomeEmpresa>
              <DescriContainer2>
                <DescriText><Text>Localização:</Text> {item.localizacao}</DescriText>
                <DescriText><Text>Serviços:</Text> {item.servicos.join(', ')}</DescriText>
                <DescriText><Text>Avaliações:</Text> {item.avaliacoes}</DescriText>
                </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
      </ScrollView>
      {isServicosFlutuanteVisible && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}>
          <ServicosDisponiveis
            servicos={selectedServico ? selectedServico.servicos : []}
            onSelectServico={handleSelectServico}
            onClose={() => setServicosFlutuanteVisible(false)}
          />
        </View>
      )}

      {selectedServico && (
        <Text>Serviço selecionado: {selectedServico}</Text>
      )}
    </ContainerMain>
  );
};

export default PetHelpers;
