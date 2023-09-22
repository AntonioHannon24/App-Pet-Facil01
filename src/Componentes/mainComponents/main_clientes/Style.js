
import styled from 'styled-components/native';

export const ContainerMain = styled.View`
    flex: 1;
`;

export const IconLogin = styled.Image`
    width: 120px;
    height: 120px;
    margin-right: 8px;
    margin-left: 130px;
    border-radius: 200px; 
    border-width: 3px;
    border-color: purple; 
`;

export const PetContainer = styled.View`
    flex: 1;
`;

export const PetText = styled.TouchableOpacity`
    margin-right: 12px;
`;


export const PetTextContainer = styled.View` //array de pets
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 270px;
  margin-top: 8px;
`;

export const View = styled.View`
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 8px;
  margin-left: 35px;
`;

export const HeaderContainer = styled.View`
  backgroundColor: purple;
  margin-bottom: 30px;
  align-items: center;
  height: 40px;
`;

export const HeaderText = styled.Text`
  margin-top: 10px;
  font-weight:bold;
  font-size: 17px;
`;




