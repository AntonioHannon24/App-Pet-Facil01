import React from 'react';
import { ContainerMain} from "../Style";
import { TextContainer2, View2, DescriContainer2, DescriText, ButtonContainer2, ButtonText2, ViewButon, IconEmpresa, NomeEmpresa, TextAdm } from './Style'
import { ScrollView} from 'react-native';

const width = "110px";

const data = [
  {
    NomePet: 'Pet1',
    Raça: 'Raça Pet1',
    Cor: 'Cor Pet1',
    Idade: 'Idade Pet1',
  },
  {
    NomePet: 'Pet2',
    Raça: 'Raça Pet2',
    Cor: 'Cor Pet2',
    Idade: 'Idade Pet2',
  },
  {
    NomePet: 'Pet3',
    Raça: 'Raça Pet3',
    Cor: 'Cor Pet3',
    Idade: 'Idade Pet3',
  },
];

const AdmPets = ({ navigation }) => {
  return (
    <ContainerMain>
      <ScrollView>
        {data.map((item, index) => (
          <TextContainer2 key={index}>
            <IconEmpresa source={require("../../img/cara-de-cachorro.png")} />
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
