import styled from 'styled-components/native';


export const TextContainer2 = styled.View`
    flex-direction: row-reverse;
    margin-top: 5px;
    border: solid;
    border-color: black;
    border-radius: 8px;
    border-bottom-left-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

export const View2 = styled.View`
    flex-direction: row;
    margin-bottom: 30px;
    flex-wrap: wrap;
    width: 60%;
    margin-left: 10px;
    margin-right: 10px;
`;

export const DescriContainer2 = styled.View` //array de pets
    border-color: purple;
`;

export const DescriText = styled.Text`
    margin-right: 8px;
    font-size: 17;
`;

export const ButtonContainer2 = styled.TouchableOpacity(props=>({
    
    padding:"10px",
    height:"40px",
    width:props.width || "200px",
    marginTop:"15px",
    marginBottom:"5px",
    borderRadius:"8px",
    backgroundColor:"#fff",
    border:"1px purple",
    alignItems:"center",
    justifyContent: "center",

}));// ok 

export const ButtonText2 = styled.Text`
    color:${props => props.theme.color};
    font-size:14px;
    padding-top: 1px;
    

`;

export const ViewButon = styled.Text`
    margin-left: 70px;
    margin-top: 15px;
`;

export const IconEmpresa = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: 12px;
    margin-left: 20px;
`;

export const NomeEmpresa = styled.Text`
    font-size: 15px;
    font-weight: bold;
    width: 70%;
    justify-content: center;
    margin-top: 12px;
    margin-left: 90px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 2px;
  margin-left: 2px;
  margin-right: 1px;
  border-width: 3px;
  border-color: purple;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ServicoItem = styled.TouchableOpacity`
  margin: 10px;
`;

export const ServicoText = styled.Text`
  font-size: 15px;
`;

export const Container2 = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-left: -20px;
`;

export const buttonStyle = styled.Text`
  padding: 10;
  border-Radius: 5;
  margin: 50px;
  font-size: 20px;
`;

export const TextDescri = styled.Text`
  font-Size: 17;
  margin-bottom: 5px;
  margin-right: 5;
`;

export const Container3 = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-left: -20px;
  flex-direction: row;
`;

