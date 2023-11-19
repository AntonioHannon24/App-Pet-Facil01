import React, { useEffect, useState } from 'react';
import { ContainerMain, IconLogin, PetTextContainer, View, PetText,HeaderContainer, HeaderText  } from "../Style";
import { ButtonContainer, ButtonText } from "../../../Estilos.js"
import { WelcomeText, TextContainer, ButtonsContainer } from '../../estilos_main.js';
import { TextContainer2, View2, DescriContainer2, DescriText, IconEmpresa, NomeEmpresa } from './Style'
import { ScrollView } from 'react-native';
import {Text , Linking, PanResponder, TouchableOpacity } from 'react-native';
import ServicosDisponiveis from './horarios';
import axios from 'axios';
import URL from '../../../../config'


const width = "110px";

const PetHelpers = ({ navigation }) => {
  const [isServicosFlutuanteVisible, setServicosFlutuanteVisible] = useState(false);
  const [selectedServico, setSelectedServico] = useState(null);
  const [petShops, setPetShops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(URL+'estabelecimentos');

        if (response.status === 200) {
          setPetShops(response.data.data); // Update state with the correct data property
          console.log('Dados da API obtidos com sucesso:', response.data.data);
        } else {
          console.log('Erro desconhecido ao obter dados da API:', response.data.message);
        }
      } catch (error) {
        console.error('Erro ao obter dados da API:', error.message);
      }
    }

    fetchData();
  }, []); // Executa apenas uma vez no carregamento do componente


  const handleOpenServicosFlutuante = (item) => {
    setSelectedServico(item);
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
        <HeaderContainer>
          <HeaderText>PET HELPER</HeaderText>
        </HeaderContainer>
        <TextContainer>
          <IconLogin source={require("../../img/dog1.png")} />
          <View>
          </View>
        </TextContainer>
        <ButtonsContainer>
        <ButtonContainer width={"120px"}>
          <ButtonText onPress={() => navigation.navigate("TelaUsuarios")}>Meu perfil</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={"120px"}>
          <ButtonText onPress={() => navigation.navigate("AgendamentosClientes")}>Agendamentos</ButtonText>
        </ButtonContainer>
        <ButtonContainer width={"115px"}>
          <ButtonText onPress={() => navigation.navigate("PetHelpers")}>PetHelpers</ButtonText>
        </ButtonContainer>
        </ButtonsContainer>

    <ScrollView>   
    {petShops.map((item, index) => (
    <TextContainer2 key={index}>
      <TouchableOpacity onPress={() => handleOpenServicosFlutuante(item)}>
        <IconEmpresa source={require("../../img/profile.png")} />
      </TouchableOpacity>
      <View2>
        <NomeEmpresa>Nome: {item.nome}</NomeEmpresa>
        <DescriContainer2>
          <DescriText>Endereço: {item.endereco}</DescriText>
          <DescriText>Serviços: {item.servico.length > 0 ? item.servico.map(servico => servico.nome).join(', ') : 'Nenhum serviço disponível'}</DescriText>
        </DescriContainer2>
      </View2>
    </TextContainer2>
  ))}
    </ScrollView>

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
