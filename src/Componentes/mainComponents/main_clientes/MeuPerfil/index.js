import React from 'react';
import { ButtonContainer, ButtonText } from "../../../Estilos.js";
import {ContainerMain, ButtonsContainer2} from "../Style.js";

const MeuPerfil = ({ navigation }) => {


    const width = "300px";

    return (
<ContainerMain>
    <ButtonsContainer2>
        <ButtonContainer width={"300px"}>
        <ButtonText >Carteirinha Meu Pet</ButtonText>
        </ButtonContainer>

        <ButtonContainer width={"300px"}>
        <ButtonText >Administração de Pets</ButtonText>
        </ButtonContainer>

        <ButtonContainer width={"300px"}>
        <ButtonText >Administração de Perfil</ButtonText>
        </ButtonContainer>

        <ButtonContainer width={"300px"}>
        <ButtonText >Notícias Mundo Pet</ButtonText>
        </ButtonContainer>

        <ButtonContainer width={"300px"}>
        <ButtonText >Dicas de Saúde</ButtonText>
        </ButtonContainer>
    </ButtonsContainer2>
</ContainerMain>
    )
} 

export default MeuPerfil;