import { StatusBar } from 'expo-status-bar';
import React from 'react';

// --------------------SCREENS------------------------

import Comprar from './src/comprar';
import Neutralizar from './src/neutralizar';
import TelaInicial from './src/tela_inicial';
import Pagamento from './src/pagamento';
import Projeto from './src/projeto/Projeto';
import Movimentos from './src/movimentacao/Movimentos';

// -------------------------------------------------------


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Telainicial" component={TelaInicial} options={{ headerShown: false}} />
        <Stack.Screen name="Neutralizar" component={Neutralizar} options={{ headerShown: false}}/>
        <Stack.Screen name="Comprar" component={Comprar} options={{ headerShown: false}}/>
        <Stack.Screen name="Pagamento" component={Pagamento} options={{ headerShown: false}}/>
        <Stack.Screen name="Projeto" component={Projeto} options={{ headerShown: false}}/>
        <Stack.Screen name="Movimentos" component={Movimentos} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

