import React, { useState, useEffect } from 'react';
import { ContainerMain, View } from "../Style";
import { TextContainer } from '../../estilos_main.js';
import { Text, Image, TouchableOpacity } from 'react-native';
import { IconCarteiraPet, CarteiraContainer, CarteiraText, Text1, PefilText, TextContainer2, TutorInfoContainer, EditButton, EditButtonText } from './Style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config';
import { ScrollView } from 'react-native-gesture-handler';

const AdmPerfil = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [image, setImage] = useState("")

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
        // Certifique-se de que a propriedade "image" está presente antes de acessá-la
        setImage(response.data.data.image || null);
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

  useEffect(() => {
  }, [user]);

  return (
    <ContainerMain>
    <TouchableOpacity>
    <Image
  style={{ width: 80, height: 80, borderRadius: 40 }}
  source={{ uri: "http://192.168.1.105:3333/uploads//" + image || null }}
/>
    </TouchableOpacity>
      <EditButton>
        <EditButtonText>Editar</EditButtonText>
      </EditButton>
      <TextContainer2>
        <Text1>Email:</Text1>
        <Text>{user.email || 'N/A'}</Text>
        <Text1>Nome:</Text1>
        <Text>{user.nome || 'N/A'}</Text>
        <Text1>CPF:</Text1>
        <Text>{user.cpf || 'N/A'}</Text>
        {/* Adicione mais informações conforme necessário */}
      </TextContainer2>
    </ContainerMain>
  );
};

export default AdmPerfil;
