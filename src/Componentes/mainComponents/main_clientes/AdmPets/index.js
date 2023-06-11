import React from 'react';
import { ContainerMain} from "../Style";
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomePet, TextAdm, IconPet } from './Style'
import { ScrollView} from 'react-native';

const width = "110px";

const data = [
  {
    NomePet: 'Pet 1',
    Raça: 'Raça Pet 1',
    Cor: 'Cor Pet 1',
    Idade: 'Idade Pet 1',
  },
  {
    NomePet: 'Pet 2',
    Raça: 'Raça Pet 2',
    Cor: 'Cor Pet 2',
    Idade: 'Idade Pet 2',
  },
  {
    NomePet: 'Pet 3',
    Raça: 'Raça Pet 3',
    Cor: 'Cor Pet 3',
    Idade: 'Idade Pet 3',
  },
];

const AdmPets = ({ navigation }) => {
  return (
    <ContainerMain>
      <ScrollView>
        {data.map((item, index) => (
          <TextContainer2 key={index}>
            <IconPet source={require("../../img/cara-de-cachorro.png")} />
            <View2>
              <NomePet>{item.NomePet}</NomePet>
              <DescriContainer2>
                <DescriText><TextAdm>Raça:</TextAdm>{item.Raça}</DescriText>
                <DescriText><TextAdm>Cor:</TextAdm>{item.Cor}</DescriText>
                <DescriText><TextAdm>Idade:</TextAdm>{item.Idade}</DescriText>
                <ViewButon>
                  <ButtonContainer2 width={width}>
                    <ButtonText2>Editar</ButtonText2>
                  </ButtonContainer2>
                </ViewButon>
              </DescriContainer2>
            </View2>
          </TextContainer2>
        ))}
      </ScrollView>
    </ContainerMain>
  );
};

export default AdmPets;
