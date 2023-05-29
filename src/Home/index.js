import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin  from "../Componentes/loginComponents/login_clientes"
import CadastroClientes from "../Componentes/cadastroComponents/cadastro_clientes";
import RecuperarSenha from '../Componentes/formulario_resenha';
import TelaEstabelecimentos from '../Componentes/mainComponents/main_empresas';
import CadastroEmpresas from "../Componentes/cadastroComponents/cadastro_empresa"
import LoginEstabelecimento from '../Componentes/loginComponents/login_empresa';
import GerenciamentoFuncionarios from '../Componentes/mainComponents/main_empresas/containerBotoes/Administrativo/funcionarios';
import GerenciamentoServicos from '../Componentes/mainComponents/main_empresas/containerBotoes/Administrativo/servicos';
import AgendamentosClientes from '../Componentes/mainComponents/main_clientes/Agendamentos';
import EstabAgendamentos from '../Componentes/mainComponents/main_empresas/containerBotoes/Agendamentos';
import EstabPublicacoes from '../Componentes/mainComponents/main_empresas/containerBotoes/publicacoes';
import PetHelpers from '../Componentes/mainComponents/main_clientes/PetHelpers';
import TelaUser from '../Componentes/mainComponents/main_clientes';
import PerfilEstabelecimento from '../Componentes/mainComponents/main_empresas/containerBotoes/Administrativo/perfil';
import CarteirinhaPet from '../Componentes/mainComponents/main_clientes/CarteirinhaPet';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Login_Estabelecimento" component={LoginEstabelecimento}/>
        <Stack.Screen name="Cadastro" component={CadastroClientes} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
        <Stack.Screen name="TelaEstabelecimentos" component={TelaEstabelecimentos}/>
        <Stack.Screen name="EstabAgendamentos" component={EstabAgendamentos}/>
        <Stack.Screen name="EstabPublicacoes" component={EstabPublicacoes}/>
        <Stack.Screen name="GerenciamentoFuncionarios" component={GerenciamentoFuncionarios}/>
        <Stack.Screen name="PerfilEstabelecimento" component={PerfilEstabelecimento}/>
        <Stack.Screen name="GerenciamentoServicos" component={GerenciamentoServicos}/>
        <Stack.Screen name="Cadastro_emp" component={CadastroEmpresas} />
        <Stack.Screen name="AgendamentosClientes" component={AgendamentosClientes} />
        <Stack.Screen name="PetHelpers" component={PetHelpers} />
        <Stack.Screen name="TelaUsuarios" component={TelaUser}/>
        <Stack.Screen name="CarteirinhaPet" component={CarteirinhaPet}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



