import styled from 'styled-components/native';

export const Container = styled.View`
    flex:2;
    justify-content:center;
    align-items:center;
    background-color:${props => props.theme.background};
`;// ok

export const Title = styled.Text`

    justify-content:center; 
    align-items:center;
    font-size:24px; 
    margin-bottom:40px;
    color:${props => props.theme.color};

`;//ok


export const ButtonContainer = styled.TouchableOpacity(props=>({
    
    padding:"10px",
    height:props.height ||"40px",
    width:props.width || "200px",
    marginTop:"10px",
    marginBottom:"5px",
    borderRadius:"8px",
    alignItems:"flex-end",
    backgroundColor:"#fff",
    border:"1px purple",
    alignItems:"center",
    
  

}));// ok 



export const ButtonContainerForm = styled.TouchableOpacity`
    
    padding-vertical:2px;
    padding-horizontal:16px;
    border-radius:8px;
    align-items:flex-end;

`;// ok 


export const ButtonText = styled.Text(props=>({
    color:props.theme.color,
    fontSize:"13px",
    //paddingTop: "1px",
    height:props.height ||"25px",
    borderColor: 'purple',
    


}));

export const InputArea = styled.TextInput`

    width:300px;
    height:40px;
    border-width:1px;
    background-color:white;
    border-color:transparent;
    margin-bottom:15px;
    padding-horizontal:10px;
    border-radius:50px;
    box-shadow :2px 2px 5px green;
    

`;
export const ButtonText2 = styled.Text`
    color: ${props =>props.theme.color};
    font-size:12px;
    height:40px;
    margin-right :110px;
    font-shadow:1px solid black;
`;

export const ButtonText3 = styled.Text`
    color: ${props =>props.theme.color};
    font-size:12px;
    height:40px;
    margin-right :110px;
`;


export const ErrorMessage = styled.Text`

    font-size:12px;
    color:red;
    font-weight:bold;
    margin-bottom:5px;
`;


export const PressBox = styled.Pressable`
    width:100%;
    align-items:center
`;

export const View = styled.View`
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 8px;
`;