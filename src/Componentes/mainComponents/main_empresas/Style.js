import styled from 'styled-components/native';


export const TextContainer2 = styled.View`
    margin-top: 5px;
    border: solid;
    border-radius: 8px;
    border-bottom-left-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 25px;
    border-color: purple;
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
    border:"1px solid black",
    alignItems:"center",
    justifyContent: "center",

}));// ok 

export const ButtonText2 = styled.Text`
    color:${props => props.theme.color};
    font-size:14px;
    padding-top: 1px;
    align-items: center;
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
    font-size: 18px;
    font-weight: bold;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 10px;
    margin-left: 100px;
`;

export const TextAdm = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
`;    

export const DescriText = styled.Text`
    margin-right: 8px;
    font-size: 17;
    margin-bottom: 10px;
`;

export const ButtonEdit = styled.TouchableOpacity`
    margin-top: 30px;
    font-size: 15px;
`;

export const ButtonExit = styled.TouchableOpacity`
    margin-top: 5px;
    font-size: 15px;
    margin-left: 40px;
`;

export const TextTop = styled.Text`
    margin-top: 5px;
    font-size: 15px;
    justify-content: center;
`;
