import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityComponent,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {barangSelectors, detailBarang, getBarang} from '../../../features/barangSlice';
import avatar from '../../../assets/images/1.jpg';

export default function BarangList({navigation}) {
  const dispatch = useDispatch();
  const barangs = useSelector(barangSelectors.selectAll); //cara ambil data dari store

  const navigate = async(barang)=>{
      await dispatch(detailBarang(barang))
      // BarangDetail
      navigation.navigate('BarangDetail')
  }

  useEffect(() => {
    dispatch(getBarang());
    console.log(barangs);
  }, [dispatch]);
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        {barangs.map(barang => (
          <TouchableOpacity onPress={()=>navigate(barang)} key={barang.id}>
            <View style={styles.listItem} >
              <Image source={avatar} style={styles.listItemImage} />
              <View style={styles.viewText}>
                <View style={styles.viewTextSub}>
                  <Text style={styles.listItemTextHeader}>
                    {barang.nama_barang}
                  </Text>
                  <Text style={styles.listItemTextSub}>{barang.stok}</Text>
                  <Text style={styles.listItemTextSub}>
                    IDR. {barang.harga}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.wrapperButton}
        onPress={() => navigation.navigate('BarangCreate')}>
        <Text style={styles.touchableText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  listItemImage: {
    marginLeft: 15,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  viewText: {
    flex: 1,
    marginLeft: 15,
  },
  viewTextSub: {
    justifyContent: 'center',
    height: 80,
    borderBottomColor: '#a4a6a5',
    borderBottomWidth: 1,
  },
  listItemTextHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  listItemTextSub: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7a7d7c',
  },
  wrapperButton: {
    bottom: 0,
    right: 0,
    backgroundColor: '#2196F3',
    width: 40,
    height: 40,
    position: 'absolute',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  touchableText: {
    fontSize: 25,
  },
});
