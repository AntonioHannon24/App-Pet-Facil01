import React from 'react';

import { ButtonContainer, ButtonText } from "../../../Estilos";
import { ContainerMain, IconLogin, PerfilContainer, ButtonsContainerPainel, ImageContainer, ButtonsContainerColumn } from "../../estilos_main";

const Administrativo = ({ navigation }) => {


    const width = "330px";


    return (
        <ContainerMain>
            <ButtonsContainerColumn>
                <ButtonContainer width={width}>
                    <ButtonText >Meu perfil</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText>Gerenciamento de funcionarios</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText >Gerenciamento de servicos</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText >Avaliações</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText >Outra Ideia</ButtonText>
                </ButtonContainer>
            </ButtonsContainerColumn>
        </ContainerMain>
        
    )
};

export default Administrativo;