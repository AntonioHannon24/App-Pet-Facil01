import React from "react";
import { ContainerMain, IconLogin, TextContainer, WelcomeText, ButtonsContainer2 } from "../estilos_main";
import {View} from "../../Estilos"
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomePet, TextAdm, IconPet, ButtonEdit, ButtonExit } from './Style'
import { ScrollView} from 'react-native';

const width = "110px";


const data = [
  {
    NomePet: 'Pet 1',
    Raça: 'Raça Pet 1',
    Cor: 'Cor Pet 1',
    Porte: 'Porte Pet 1',
    Data: '01/07/2023',
    Horario: '09:00',
    TipoServiço: 'Banho e Tosa'
  },
  {
    NomePet: 'Pet 2',
    Raça: 'Raça Pet 2',
    Cor: 'Cor Pet 2',
    Porte: 'Porte Pet 2',
    Data: '01/07/2023',
    Horario: '11:00',
    TipoServiço: 'Banho'
  },
  {
    NomePet: 'Pet 3',
    Raça: 'Raça Pet 3',
    Cor: 'Cor Pet 3',
    Porte: 'Porte Pet 3',
    Data: '01/07/2023',
    Horario: '14:00',
    TipoServiço: 'Banho e tosa higiênica'
  },
];

const TelaEstabelecimentos = ({ navigation }) => {

  return (
    <ContainerMain>
       <TextContainer>
        <IconLogin source={require('../img/profile.png')} />
        {/* <View>
          <WelcomeText>Bem-vindo PetHelper!</WelcomeText>
          <ButtonEdit>Editar Perfil</ButtonEdit>
        </View>
        <View>
          <ButtonExit onPress={() => navigation.navigate("LoginEstabelecimento")}> Sair</ButtonExit>
        </View> */}
      </TextContainer>
      <ScrollView>
        {data.map((item, index) => (
          <TextContainer2 key={index}>
            <IconPet source={require("../img/cara-de-cachorro.png")} />
            <View2>
              <NomePet>{item.NomePet}</NomePet>
              <DescriContainer2>
                <DescriText><TextAdm>Raça:</TextAdm>{item.Raça}</DescriText>
                <DescriText><TextAdm>Cor:</TextAdm>{item.Cor}</DescriText>
                <DescriText><TextAdm>Porte:</TextAdm>{item.Porte}</DescriText>
                <DescriText><TextAdm>Data Atendimento:</TextAdm>{item.Data}</DescriText>
                <DescriText><TextAdm>Horário Atendimento:</TextAdm>{item.Horario}</DescriText>
                <DescriText><TextAdm>Tipo do Serviço:</TextAdm>{item.TipoServiço}</DescriText>
                <ViewButon>
                  <ButtonContainer2 width={width}>
                    <ButtonText2>Finalizar Atendimento</ButtonText2>
                  </ButtonContainer2>
                </ViewButon>
              </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
      </ScrollView>
    </ContainerMain>
  )
};

export default TelaEstabelecimentos;