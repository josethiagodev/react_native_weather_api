import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'Minha Cidade'
        }}
      />

      <Drawer.Screen 
        name="Search" 
        component={Search}
        options={{
          title: 'Buscar Cidade'
        }}
      />
    </Drawer.Navigator>
  )
}
