import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin  from "../Componentes/loginComponents/login_clientes"
import CadastroClientes from "../Componentes/cadastroComponents/cadastro_clientes";
import RecuperarSenha from '../Componentes/formulario_resenha';
import TelaEstabelecimentos from '../Componentes/mainComponents/main_empresas';
import LoginEstabelecimento from '../Componentes/loginComponents/login_empresa';
import AgendamentosClientes from '../Componentes/mainComponents/main_clientes/Agendamentos';
import PetHelpers from '../Componentes/mainComponents/main_clientes/PetHelpers';
import CarteirinhaPet from '../Componentes/mainComponents/main_clientes/CarteirinhaPet';
import AdmPets from '../Componentes/mainComponents/main_clientes/AdmPets';
import AdmPerfil from '../Componentes/mainComponents/main_clientes/AdmPerfil';
import TelaUsers from '../Componentes/mainComponents/main_clientes/TelaUser';
import MeusAgendamentos from '../Componentes/mainComponents/main_clientes/Agendamentos/MeusAgendamentos';

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
        <Stack.Screen name="AgendamentosClientes" component={AgendamentosClientes} />
        <Stack.Screen name="PetHelpers" component={PetHelpers} />
        <Stack.Screen name="CarteirinhaPet" component={CarteirinhaPet}/>
        <Stack.Screen name="AdmPets" component={AdmPets}/>
        <Stack.Screen name="AdmPerfil" component={AdmPerfil}/>
        <Stack.Screen name="TelaUsuarios" component={TelaUsers}/>
        <Stack.Screen name="MeusAgendamentos" component={MeusAgendamentos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



