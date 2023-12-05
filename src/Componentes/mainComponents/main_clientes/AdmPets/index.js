import React, { useState, useEffect } from 'react';
import { ContainerMain } from "../Style";
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonContainer3, ButtonText2, ViewButon, IconPet, NomePet, TextAdm } from './Style'
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../../config'

const width = "110px";

const AdmPets = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [pets, setPets] = useState([]);

  // Exemplo de recuperação do token na tela de Serviços Disponíveis
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
      fetchUserPets();
    }
  }, [userId]);



  const fetchUserPets = async () => {
    try {
        const urls = `${URL}usuarios/${userId}`;
        const response = await axios.get(urls);
        setPets(response.data.data.pets); 

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerMain>
      <ScrollView>
        {pets.map((pet, index) => (
          <TextContainer2 key={index}>
            <IconPet source={require("../../img/cara-de-cachorro.png")} />
            <View2>
              <NomePet>{pet.nome}</NomePet>
              <DescriContainer2>
                <DescriText><TextAdm>Idade: </TextAdm>{pet.idade}</DescriText>
                <DescriText><TextAdm>Cor: </TextAdm>{pet.cor}</DescriText>
                <DescriText><TextAdm>Porte: </TextAdm>{pet.porte}</DescriText>
                <DescriText><TextAdm>Peso:  </TextAdm>{pet.peso}</DescriText>
              </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 30, marginBottom: 30}}>
      <ButtonContainer3 onPress={() => navigation.navigate('CadastroPets')}>
        <ButtonText2>Cadastrar Pet</ButtonText2>
      </ButtonContainer3>
      </View>

    </ContainerMain>
  );
};

export default AdmPets;
