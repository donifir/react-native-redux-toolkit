import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.91.14:8000/api/';

const header = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
};

export const getBarang = createAsyncThunk(
  'barang/getBarang',
  async () =>
    await axios.get('barang').then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    }),
);
//craete barang
export const createBarang = createAsyncThunk(
  'barang/createBarang',
  async (formData, {rejectWithValue}) =>
    await axios
      .post('barang/create', formData, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }),
);

export const detailBarang = createAsyncThunk(
  'barang/detailBarang',
  async barang => {
    const data = barang;
    return data;
  },
);

// delete
export const deleteBarang = createAsyncThunk(
  'barang/deleteBarang',
  async id =>
    await axios.delete(`barang/${id}`).then(function (response) {
      console.log(response.data);
      return id;
    }),
);

//Edit barang
export const editBarang = createAsyncThunk(
  'barang/editBarang',
  async ({formData, id}, {rejectWithValue}) =>
    await axios
      .post(`barang/${id}/update`, formData, header)
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }),
);

const barangEntity = createEntityAdapter({
  selectId: barang => barang.id,
});

const barangSlice = createSlice({
  name: 'suplier',
  initialState: barangEntity.getInitialState(),

  extraReducers: {
    // getBarang
    [getBarang.pending]: (state, action) => {
      state.navigateCreate = 'false';
      state.navigateUpdate = 'false';
    },
    [getBarang.fulfilled]: (state, action) => {
      barangEntity.setAll(state, action.payload);
      state.navigateCreate = 'false';
    },

    //create
    [createBarang.fulfilled]: (state, action) => {
      barangEntity.addOne(state, action.payload);
      state.navigateCreate = 'true';
    },
    [createBarang.rejected]: (state, action) => {
      state.dataError = action.payload;
    },

    //detail detailBarang
    [detailBarang.fulfilled]: (state, action) => {
      state.dataBarang = action.payload;
    },

    // deleteBarang
    [deleteBarang.fulfilled]: (state, action) => {
      barangEntity.removeOne(state, action.payload);
    },
    //edit
    [editBarang.fulfilled]: (state, action) => {
      barangEntity.updateOne(state, {id:action.payload.id, updates:action.payload});
      state.navigateUpdate = 'true';
    },
    [editBarang.rejected]: (state, action) => {
      state.dataError = action.payload;
    },
  },
});

export const barangSelectors = barangEntity.getSelectors(state => state.barang); //suplier harus sama dengan di store

export default barangSlice.reducer; //agar bsa dipanggil di store
