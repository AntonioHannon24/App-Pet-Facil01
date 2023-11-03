import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from "../Componentes/loginComponents/login_clientes"
import CadastroClientes from "../Componentes/cadastroComponents/cadastro_clientes";
import RecuperarSenha from '../Componentes/formulario_resenha';
import TelaEstabelecimentos from '../Componentes/mainComponents/main_empresas';
import LoginEstabelecimento from '../Componentes/loginComponents/login_empresa';
import AgendamentosClientes from '../Componentes/mainComponents/main_clientes/Agendamentos';
import PetHelpers from '../Componentes/mainComponents/main_clientes/PetHelpers';
import CarteirinhaPet from '../Componentes/mainComponents/main_clientes/CarteirinhaPet';
import AdmPets from '../Componentes/mainComponents/main_clientes/AdmPets';
import AdmPerfil from '../Componentes/mainComponents/main_clientes/AdmPerfil';
import MeusAgendamentos from '../Componentes/mainComponents/main_clientes/Agendamentos/MeusAgendamentos';
import TelaUser from "../Componentes/mainComponents/main_clientes/TelaUser"
import CadastroPets from '../Componentes/mainComponents/main_clientes/AdmPets/CadPets';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Login_Estabelecimento" component={LoginEstabelecimento} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroClientes} options={{ headerShown: false }} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false }} />
        <Stack.Screen name="TelaEstabelecimentos" component={TelaEstabelecimentos} options={{ headerShown: false }} />
        <Stack.Screen name="AgendamentosClientes" component={AgendamentosClientes} options={{ headerShown: false }} />
        <Stack.Screen name="PetHelpers" component={PetHelpers} options={{ headerShown: false }} />
        <Stack.Screen name="CarteirinhaPet" component={CarteirinhaPet} options={{ headerShown: false }} />
        <Stack.Screen name="AdmPets" component={AdmPets} options={{ headerShown: false }} />
        <Stack.Screen name="AdmPerfil" component={AdmPerfil} options={{ headerShown: false }} />
        <Stack.Screen name="TelaUser" component={TelaUser} options={{ headerShown: false }} />
        <Stack.Screen name="MeusAgendamentos" component={MeusAgendamentos} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroPets" component={CadastroPets} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
