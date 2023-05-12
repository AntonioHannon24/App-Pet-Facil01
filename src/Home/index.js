import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin  from "../Componentes/loginComponents/login_clientes"
import CadastroClientes from "../Componentes/cadastroComponents/cadastro_clientes";
import RecuperarSenha from '../Componentes/formulario_resenha';
import TelaEstabelecimentos from '../Componentes/mainComponents/main_empresas';
import TelaUser from '../Componentes/mainComponents/main_clientes';
import CadastroEmpresas from "../Componentes/cadastroComponents/cadastro_empresa"
import LoginEstabelecimento from '../Componentes/loginComponents/login_empresa';
import GerenciamentoFuncionarios from '../Componentes/mainComponents/main_empresas/Administrativo/funcionarios';
import PerfilEstabelecimento from '../Componentes/mainComponents/main_empresas/Administrativo/perfil';
import GerenciamentoServicos from '../Componentes/mainComponents/main_empresas/Administrativo/servicos';
import Agendamentos from '../Componentes/mainComponents/main_empresas/Agendamentos';
import AgendamentosClientes from '../Componentes/mainComponents/main_clientes/Agendamentos';


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
        <Stack.Screen name="GerenciamentoFuncionarios" component={GerenciamentoFuncionarios}/>
        <Stack.Screen name="PerfilEstabelecimento" component={PerfilEstabelecimento}/>
        <Stack.Screen name="GerenciamentoServicos" component={GerenciamentoServicos}/>
        <Stack.Screen name="TelaUsuarios" component={TelaUser}/>
        <Stack.Screen name="Cadastro_emp" component={CadastroEmpresas} />
        <Stack.Screen name="Agendamentos" component={AgendamentosClientes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



