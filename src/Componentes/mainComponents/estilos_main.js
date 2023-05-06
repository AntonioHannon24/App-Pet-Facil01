import styled from "styled-components/native";


export const ContainerMain = styled.View(props=>({
    display:"flex",
    flexDirection:"column",
    flex:"2",
}));// ok 


export const IconeContainer = styled.View`
    flex-direction:row;
    align-items:center
    margin-top:5px;

`;// ok

export const Icone = styled.Image`
    position:absolute;
`;// ok

export const Icon = styled.Image`
    
    margin-top:120px;
    height:50px;
    width:50px;
    margin-right:10px;
`;// ok

export const Nome = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin-top:5px;
`;// ok

export const DispoFuncao = styled.Text`
    font-size:14px;
    margin-top:5px;
`;// ok

export const Linha = styled.View`
    borderBottomWidth:1px;
    borderBottomColor:black;
    margin-top:10px;
    margin-bottom:10px;

`;// ok
export const Loop = styled.View``;


export const PerfilContainer = styled.View`
    
    background-color:red;
    
    flex-grow:2;
`;

export const ButtonsContainer = styled.View`
    padding:20px;
    background-color:blue;  
    flex-grow:2;
    align-items:center;
`;