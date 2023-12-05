import React, { useState, useEffect } from 'react';
import { ContainerMain, IconLogin, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import {View} from "../../Estilos"
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomePet, TextAdm, IconPet, ButtonEdit, ButtonExit, TextTop} from './Style'
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../config'
import { CalendarContainer, Container } from "../main_clientes/Agendamentos/Style";

const width = "110px";


const TelaEstabelecimentos = ({ navigation }) => {
  const [userId, setUserId] = useState(null);
  const [agendaClientes, setAgendaClientes] = useState([]);
  
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
      fetchAgendasUser();
    }
  }, [userId]);



  const fetchAgendasUser = async () => {
    try {
        const urls = `${URL}agendaClientes/${userId}`;
        const response = await axios.get(urls);
        setAgendaClientes(response.data.data); 

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerMain>
       <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
    <View>
      <Text style={WelcomeText}>Bem-vindo PetHelper!</Text>
      <TouchableOpacity style={ButtonEdit}>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonExit} onPress={() => navigation.navigate("Login")}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
      </TextContainer>
      <Container>
        <CalendarContainer>
        <ScrollView>
        {agendaClientes.map((agenda, index) => (
          <TextContainer2 key={index}>
            <View2>
              <DescriContainer2>
                <Text><TextTop>Data e Hora:</TextTop>{agenda.data_hora}</Text>
                <Text><TextTop>status:</TextTop>{agenda.status}</Text>
                <Text><TextTop>Pet:</TextTop>{agenda.pet_id}</Text>
                <Text><TextTop>Estabelecimento:</TextTop>{agenda.estabelecimento_id}</Text>
              </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
          </ScrollView>
        </CalendarContainer>
      </Container>
    </ContainerMain>
  )
};

export default TelaEstabelecimentos;