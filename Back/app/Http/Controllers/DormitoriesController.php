<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dormitories;

class DormitoriesController extends Controller
{
    public function createDormitory(Request $request){
        $dormitory = new Dormitories;
        $dormitory->ad_name = $request->ad_name;
        $dormitory->address = $request->address;
        $dormitory->zipcode = $request->zipcode;
        $dormitory->city_state = $request->city_state;
        $dormitory->phone = $request->phone;
        $dormitory->bills_included = $request->bills_included;
        $dormitory->description = $request->description;
        $dormitory->price = $request->price;
        $dormitory->owner = $request->owner;
        $dormitory->save();
        return response()->json($dormitory);
    }

    public function showDormitory ($id){
        $dormitory = Dormitories::findOrFail($id);
        return response()->json($dormitory);
    }

    public function findDormitory($ad_name){
        $dormitory = Dormitories::where('ad_name', $ad_name)->first();
        return response()->json($dormitory);
    }

    public function listDormitory(){
        $dormitory = Dormitories::all();
        return response()->json($dormitory);
    }

    public function updateDormitory(Request $request, $id){
        $dormitory = Dormitories::findOrFail($id);
        if($request->ad_name){
            $dormitory->ad_name = $request->ad_name;
        }
        if($request->address){
            $dormitory->address = $request->address;
        }
        if($request->zipcode){
            $dormitory->zipcode = $request->zipcode;
        }
        if($request->city_state){
            $dormitory->city_state = $request->city_state;
        }
        if($request->phone){
            $dormitory->phone = $request->phone;
        }
        if($request->bills_included){
            $dormitory->bills_included = $request->bills_included;
        }
        if($request->description){
            $dormitory->description = $request->description;
        }
        if($request->price){
            $dormitory->price = $request->price;
        }
        if($request->owner){
            $dormitory->owner = $request->owner;
        }
        $dormitory->save();
        return response()->json($dormitory);
    }


    public function deleteDormitory($id){
        Dormitories::destroy($id);
        return response()->json(['Produto deletado']);
    }

    public function addUser($id, $dormitory_id){
        $user = User::findOrFail($id);
        $dormitory = Dormitories::findOrFail($dormitory_id);
        $dormitory_id->user_id = $id;
        $dormitory->save();
        return response ()->json($dormitory);
    }

    public function addDormitory($id, $dormitory_id){
        $user = User::findOrFail($id);
        $dormitory = Dormitories::findOrFail($dormitory_id);
        $user->dormitory_id = $dormitory_id;
        $user->save();
        return response()->json($user);
    }

    public function removeDormitory($id, $dormitory_id){
        $user = User::findOrFail($id);
        $dormitory = Dormitories::findOrFail($dormitory_id);
        $user->dormitory_id = NULL;
        $user->save();
        return response()->json($user);
    }

}
