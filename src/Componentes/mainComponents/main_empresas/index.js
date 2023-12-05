import React from "react";
import { ContainerMain, IconLogin, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import {View} from "../../Estilos"
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomePet, TextAdm, IconPet, ButtonEdit, ButtonExit } from './Style'
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../config'
import { CalendarContainer } from "../main_clientes/Agendamentos/Style";

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
        <Text>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonExit} onPress={() => navigation.navigate("LoginEstabelecimento")}>
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
              <Text>Meus Agendamentos</Text>
              <DescriContainer2>
                <Text><Text>Data e Hora:</Text>{agenda.data_hora}</Text>
                <Text><Text>status:</Text>{agenda.status}</Text>
                <Text><Text>Pet:</Text>{agenda.pet_id}</Text>
                <Text><Text>Estabelecimento:</Text>{agenda.estabelecimento_id}</Text>
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