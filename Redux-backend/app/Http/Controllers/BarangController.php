<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $barangs = Barang::orderBy('id', 'desc')->get();
        $response = [
            'success' => true,
            'message' => 'list data barang',
            'data' => $barangs,
        ];
        return response()->json($response, Response::HTTP_OK);
    }


    public function store(Request $request)
    {
        //
        $validator = Validator($request->all(), [
            'nama_barang' => 'required|max:50',
            'harga' => 'required',
            'stok' => 'required',
            'keterangan' => 'required',
            'gambar' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => true,
                'message' => $validator->errors(),
                'data' => null,
            ];
            return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
        }else{
            $barang=Barang::create([
                'nama_barang'=>$request->nama_barang,
                'harga'=>$request->harga,
                'stok'=>$request->stok,
                'keterangan'=>$request->keterangan,
                'gambar'=>$request->gambar,
            ]);
            $response = [
                'success' => true,
                'message' => 'data created',
                'data' => $barang
            ];
            return response()->json($response, Response::HTTP_OK);
        }
    }

    public function update(Request $request, $id)
    {
        //
        $validator = Validator($request->all(), [
            'nama_barang' => 'required|max:50',
            'harga' => 'required',
            'stok' => 'required',
            'keterangan' => 'required',
            'gambar' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => true,
                'message' => $validator->errors(),
                'data' => null,
            ];
            return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
        }else{
            $barang=Barang::find($id);
            $barang->update([
                'nama_barang'=>$request->nama_barang,
                'harga'=>$request->harga,
                'stok'=>$request->stok,
                'keterangan'=>$request->keterangan,
                'gambar'=>$request->gambar,
            ]);
            $response = [
                'success' => true,
                'message' => 'data created',
                'data' => $barang
            ];
            return response()->json($response, Response::HTTP_OK);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Barang::find($id)->delete();
        $response = [
            'success' => true,
            'message' => 'data deleted',
            'data' => null
        ];
        return response()->json($response, Response::HTTP_OK);
    }
}
