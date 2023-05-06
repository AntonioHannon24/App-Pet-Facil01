import React from 'react';

import { ContainerMain, DispoFuncao, Icon, Icone, IconeContainer, Linha, Loop, Nome } from "../../estilos_main";

const TelaFuncionarios = () => {


  const users = [
    {
      nome: 'Usuário 1',
      função: 'Médico(a) Veterinário',
      disponibilidade: 'Segunda a Sexta, 8h às 17h',
      icon: require("../../img/profile.png"),
    }, 
  ];
  return (
    <ContainerMain>
      {users.map((user, index) => (
        <Loop key={index}>
          <IconeContainer>
            <Icone source={require('../../img/horario.png')} />
          </IconeContainer>
          <Icon source={require('../../img/profile.png')} />
          <Nome>{user.nome}</Nome>
          <DispoFuncao>{user.função}</DispoFuncao>
          <DispoFuncao>{user.disponibilidade}</DispoFuncao>
          {index < users.length - 1 && <Linha />}
        </Loop>))}
    </ContainerMain>
  );
};

export default TelaFuncionarios;


