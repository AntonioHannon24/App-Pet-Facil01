import { ButtonContainer, ButtonText } from "../../../Estilos";
import { ContainerMain, ButtonsContainerColumn } from "../../estilos_main";


const Administrativo = ({ nav }) => {

    const navi = nav;

    const width = "330px";

    return (
        <ContainerMain>
            <ButtonsContainerColumn>
                <ButtonContainer width={width}>
                    <ButtonText onPress={()=> navi.navigate("PerfilEstabelecimento")}>
                                                               Meu perfil</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText onPress={()=> navi.navigate("GerenciamentoFuncionarios")}>
                                                Gerenciamento de funcionarios</ButtonText>
                </ButtonContainer>
                <ButtonContainer width={width}>
                    <ButtonText onPress={()=> navi.navigate("GerenciamentoServicos")}
                                                  >Gerenciamento de servicos</ButtonText>
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