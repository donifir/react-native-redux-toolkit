import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import BarangList from '../pages/barang/BarangList';
import BarangCreate from '../pages/barang/BarangCreate';
import Detailbarang from '../pages/barang/BarangDetail';
import BarangEdit from '../pages/barang/BarangEdit';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BarangList" component={BarangList} />
      <Stack.Screen name="BarangCreate" component={BarangCreate} />
      <Stack.Screen name="BarangDetail" component={Detailbarang} />
      <Stack.Screen name="BarangEdit" component={BarangEdit} />


    </Stack.Navigator>
  );
}
