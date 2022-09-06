import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Home({ navigation }) {

  return (
    <View style={styles.wrapper}>
      <Text>Go To Sreen Barang</Text>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('BarangList')}>
        <Text style={styles.touchableText}>redirect Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    marginTop:10,
    backgroundColor: '#2196F3',
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius:10,
  },
  touchableText:{
    fontWeight:'650'
  }
});
