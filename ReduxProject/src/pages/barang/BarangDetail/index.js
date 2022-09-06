import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '@react-native-material/core';
import { deleteBarang } from '../../../features/barangSlice';

export default function Detailbarang({navigation}) {
  const [data, setData] = useState([]);
  const dataBarang = useSelector(state => state.barang.dataBarang);

  useEffect(() => {
    setData(dataBarang);
  }, [dataBarang]);

  
  const dispatch=useDispatch();
  const deleteBarangState=async(id)=>{
    dispatch(deleteBarang(id))
    navigation.navigate('BarangList')
    Alert.alert(
        "success",
        "Data Deleted")
  }
  return (
    <View style={styles.wrapper}>
    {console.log(dataBarang)}
      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.itemText1}>Nama Barang</Text>
          <Text style={styles.itemText2}>:</Text>
          <Text style={styles.itemText3}>{dataBarang.nama_barang}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText1}>Harga</Text>
          <Text style={styles.itemText2}>:</Text>
          <Text style={styles.itemText3}>{data.harga}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText1}>Stok</Text>
          <Text style={styles.itemText2}>:</Text>
          <Text style={styles.itemText3}>{data.stok}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText1}>Keterangan</Text>
          <Text style={styles.itemText2}>:</Text>
          <Text style={styles.itemText3}>{data.keterangan}</Text>
        </View>
      </View>

      
      <View style={styles.wrapperButton}>
        <View style={styles.button}>
          <Button title="edit" onPress={()=>navigation.navigate('BarangEdit')}/>
        </View>
        <View style={styles.button}>
          <Button title="delete" onPress={()=>deleteBarangState(data.id)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  card: {
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
  },
  item: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  itemText1: {
    flex: 3,
  },
  itemText2: {
    flex: 1,
  },
  itemText3: {
    flex: 5,
  },
  wrapperButton: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
