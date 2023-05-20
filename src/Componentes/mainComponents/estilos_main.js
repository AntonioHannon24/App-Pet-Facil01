import styled from "styled-components/native";


export const ContainerMain = styled.View(props=>({
    display:"flex",
    flexDirection:"column",
    flex:"2",
}));// ok 


export const IconeContainer = styled.View`
    flex-direction:row;
    align-items:center;
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
    padding-top:20px;
    background-color:gray;
    flex:1;
`;


export const ButtonsContainer = styled.View(props=>({
    paddingTop:20,
    paddingLeft:props.paddingLeft || 20,
    paddingRight:20,
    paddingBottom:20,
    flexDirection: "row",
    alignItems:"center",
}));

export const ButtonsContainerPainel = styled.View`

    flex:1;
    background-color:red;  
    flex-direction: row;
    align-items:flex-end;
    justify-content:center;
    display: flex;
`;

export const IconLogin = styled.Image`
    width: 100px;
    height: 100px;
    margin-right: 8px;
    margin-left: 20px;
`;

export const ImageContainer = styled.View`
    margin-top:40px;
    background-color:gray;  
    flex:3;
`;
export const TextContainer = styled.View(props=>({
    flexDirection: "row",
    marginTop: props.marginTop || "0px",
}));

export const WelcomeText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    flex-wrap: wrap;
    width: 70%;
`;


export const ButtonsContainer2 = styled.View`
    padding:50px;
    //background-color:red;  
    flex-direction: column;
    align-items:center;
    display: flex;
    margin-bottom: 50px;
`;
