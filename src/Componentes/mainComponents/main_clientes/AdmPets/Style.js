import styled from 'styled-components/native';


export const TextContainer2 = styled.View`
    flex-direction: row-reverse;
    margin-top: 5px;
    border: solid;
    border-color: purple;
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

export const ButtonContainer3 = styled.TouchableOpacity(props => ({
    padding: "10px",
    height: "40px",
    width: props.width || "200px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    borderWidth: "1px", // Corrigido para "borderWidth"
    borderColor: "purple", // Corrigido para "borderColor"
    alignItems: "center",
    justifyContent: "center", // Adicionado para centralizar verticalmente
  }));

  export const ButtonText2 = styled.Text`
  color: ${props => props.theme.color};
  font-size: 14px;
  padding-top: 1px;
  text-align: center; /* Adicionado para centralizar o texto horizontalmente */
`;

export const ViewButon = styled.Text`
    margin-left: 70px;
    margin-top: 15px;
`;

export const IconPet = styled.Image`
    width: 80px;
    height: 80px;
    margin-top: 12px;
    margin-left: 20px;
    margin-right: 10px;
`;

export const NomePet = styled.Text`
    font-size: 16px;
    font-weight: bold;
    justify-content: center;
    margin-top: 12px;
    margin-left: 100px;
    margin-bottom: 10px;
`;

export const TextAdm = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
    margin-bottom: 10px;
`;    

export const DescriText = styled.Text`
    margin-right: 8px;
    font-size: 16;
`;