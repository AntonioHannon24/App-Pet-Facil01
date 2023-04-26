import styled from 'styled-components/native';

export const Container = styled.View`
    flex:2;
    justify-content:center;
    align-items:center;
`;// ok

export const Title = styled.Text`

    justify-content:center; 
    align-items:center;
    font-size:24px; 
    margin-bottom:40px;
    color:green;
`;//ok


export const ButtonContainer = styled.TouchableOpacity`
    padding-vertical:2px;
    padding-horizontal:16px;
    border-radius:8px;
    align-items:flex-end;
`;// ok 

export const ButtonText = styled.Text`
    color:green;
    font-size:16px;

`;

export const InputArea = styled.TextInput`

    width:60%;
    height:40px;
    border-width:1px;
    background-color:white;
    border-color:transparent;
    margin-bottom:15px;
    padding-horizontal:10px;
    border-radius:10px;
    box-shadow :2px 2px 5px green;

`;

export const ButtonText2 = styled.Text`
    color: green;
    font-size:12px;
    height:40px;
    margin-right :110px;
`;s