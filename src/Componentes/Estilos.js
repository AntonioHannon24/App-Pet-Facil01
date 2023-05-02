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


export const ButtonContainer = styled.TouchableOpacity`
    
    padding:10px;
    margin:4px;
    margin-bottom:1px;
    border-radius:8px;
    align-items:flex-end;
    background-color:#fff;
    border:1px solid black;

  

`;// ok 



export const ButtonContainerForm = styled.TouchableOpacity`
    
    padding-vertical:2px;
    padding-horizontal:16px;
    border-radius:8px;
    align-items:flex-end;

`;// ok 


export const ButtonText = styled.Text`
    color:${props => props.theme.color};
    font-size:16px;
    padding-horizontal:40px;

`;

export const InputArea = styled.TextInput`

    width:60%;
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

    font-size:12;
    color:red;
    font-weight:bold;
    margin-bottom:5px;
`;


export const PressBox = styled.Pressable`
    width:100%;
    align-items:center
`;