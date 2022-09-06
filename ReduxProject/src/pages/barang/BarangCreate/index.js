import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createBarang, getBarang} from '../../../features/barangSlice';

export default function BarangCreate({navigation}) {
  const [namaBarang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [gambar, setGambar] = useState('');
  const [error, setError] = useState([]);

  const dispatch = useDispatch();
  const navigateCreate = useSelector(state => state.barang.navigateCreate);
  const dataError = useSelector(state => state.barang.dataError);

  const submit = async() => {
    const formData = new FormData();
    formData.append('nama_barang', namaBarang);
    formData.append('harga', harga);
    formData.append('stok', stok);
    formData.append('keterangan', keterangan);
    formData.append('gambar', gambar);

    await dispatch(createBarang(formData));
  };

  useEffect(() => {
    if (navigateCreate === 'true') {
      navigation.navigate('BarangList');
      dispatch(getBarang());
    }
  }, [navigateCreate]);

  useEffect(() => {
    if (dataError) {
      setError(dataError);
    }
  }, [dataError]);

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.viewForm}>
          <Text style={styles.text}>Nama Barang</Text>
          <TextInput
            style={styles.textInput}
            value={namaBarang}
            onChangeText={value => setNamaBarang(value)}
          />
          <Text style={styles.errorNotif}>{error.nama_barang}</Text>
        </View>
        <View style={styles.viewForm}>
          <Text style={styles.text}>Harga</Text>
          <TextInput
            style={styles.textInput}
            value={harga}
            onChangeText={value => setHarga(value)}
          />
          <Text style={styles.errorNotif}>{error.harga}</Text>
        </View>
        <View style={styles.viewForm}>
          <Text style={styles.text}>Stok</Text>
          <TextInput
            style={styles.textInput}
            value={stok}
            onChangeText={value => setStok(value)}
          />
          <Text style={styles.errorNotif}>{error.stok}</Text>
        </View>
        <View style={styles.viewForm}>
          <Text style={styles.text}>Keterangan</Text>
          <TextInput
            style={styles.textInput}
            value={keterangan}
            onChangeText={value => setKeterangan(value)}
          />
          <Text style={styles.errorNotif}>{error.keterangan}</Text>
        </View>
        <View style={styles.viewForm}>
          <Text style={styles.text}>Gambar</Text>
          <TextInput
            style={styles.textInput}
            value={gambar}
            onChangeText={value => setGambar(value)}
          />
          <Text style={styles.errorNotif}>{error.gambar}</Text>
        </View>
        <TouchableOpacity style={styles.touchable} onPress={submit}>
          <Text style={styles.touchabletext}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  viewForm: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
  },
  touchable: {
    backgroundColor: '#2196F3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  touchabletext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorNotif: {
    color: 'red',
  },
});
