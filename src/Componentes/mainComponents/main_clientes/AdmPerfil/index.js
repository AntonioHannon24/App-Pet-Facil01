import React, { useState, useEffect } from 'react';
import { ContainerMain, View } from "../Style";
import { TextContainer } from '../../estilos_main.js';
import { Text } from 'react-native';
import { IconCarteiraPet, CarteiraContainer, CarteiraText, Text1, PefilText, TextContainer2 } from './Style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config';
import { ScrollView } from 'react-native-gesture-handler';

const AdmPerfil = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserid = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (userId) {
          setUserId(userId);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserid();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${URL}usuarios/${userId}`);
      if (response.status === 200) {
        setUser(response.data.data);
        console.log('Dados do usuário obtidos com sucesso:', response.data.data);
      } else if (response.status === 401) {
        console.log(response.data.message);
      } else {
        console.log("Erro desconhecido");
      }
    } catch (error) {
      if (error.response) {
        console.error('Erro no servidor:', error.response.data);
      } else if (error.request) {
        console.error('Sem resposta do servidor');
      } else {
        console.error('Erro ao configurar a solicitação', error.message);
      }
    }
  }

  return (
    <ContainerMain>
      <TextContainer>
        <IconCarteiraPet source={require("../../img/profile.png")} />
        <CarteiraText>Editar</CarteiraText>

        <TextContainer2>
          <Text1>Email:</Text1>
          <Text>{user.email}</Text>
          <Text1>Nome: </Text1>
          <Text>{user.nome}</Text>
          <Text1>CPF: </Text1>
          <Text>{user.cpf}</Text>
          <Text1>Cidade ID: </Text1>
          <Text>{user.cidade_id}</Text>
        </TextContainer2>
      </TextContainer>
    </ContainerMain>
  );
};

export default AdmPerfil;
