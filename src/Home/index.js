import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from '../Componentes/login';
import Cadastro from '../Componentes/cadastros';
import RecuperarSenha from '../Componentes/formulario_resenha';
import TelaPrincipal from '../Componentes/main';
import Cadastro_emp from '../Componentes/cadastro_empresa'

const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="Cadastro_emp" component={Cadastro_emp} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



