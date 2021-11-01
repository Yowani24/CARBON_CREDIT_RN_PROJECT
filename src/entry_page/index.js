import React from 'react';

// --------------------SCREENS------------------------

import Comprar from '../comprar';
import Neutralizar from '../neutralizar';
import TelaInicial from '../tela_inicial';
import Pagamento from '../pagamento';
import Projeto from '../projeto/Projeto';
import Movimentos from '../movimentacao/Movimentos';

// -------------------------------------------------------


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function EntryPage() {
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

