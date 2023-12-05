import React, { useState, useEffect } from 'react';
import { ContainerMain, View } from "../Style";
import { TextContainer } from '../../estilos_main.js';
import { Text, Image, TouchableOpacity } from 'react-native';
import { IconCarteiraPet, CarteiraContainer, CarteiraText, Text1, PefilText, TextContainer2, TutorInfoContainer, EditButton, EditButtonText } from './Style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonContainer2 } from '../PetHelpers/Style.js';

const AdmPerfil = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [image, setImage] = useState("")

  const handleFechar = () => {
    // Use the navigation.goBack() method to navigate back to the previous screen
    navigation.navigate('TelaUser');
  };

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Image
        style={{ width: 120, height: 120, borderRadius: 40, marginTop: 150, marginRight: 30}}
        source={{ uri: "http://192.168.1.105:3333/uploads//" + (image || null) }}
      />
    </View>
    </TouchableOpacity>
      <TextContainer2>
        <Text1>Email:</Text1>
        <Text>{user.email || 'N/A'}</Text>
        <Text1>Nome:</Text1>
        <Text>{user.nome || 'N/A'}</Text>
        <Text1>CPF:</Text1>
        <Text>{user.cpf || 'N/A'}</Text>
        <Text1>Cidade:</Text1>
        <Text>{user.cidade_id || 'N/A'}</Text>
        {/* Adicione mais informações conforme necessário */}
      </TextContainer2>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 30}}>
        <ButtonContainer2>
          <TouchableOpacity onPress={handleFechar}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </ButtonContainer2>
      </View>

    </ContainerMain>

    
  );
};

export default AdmPerfil;
