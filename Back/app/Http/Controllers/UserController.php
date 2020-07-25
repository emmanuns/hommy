<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function createUser(Request $request){
        $user = new User;
        $user->name = $request->name;
        $user->age = $request->age;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        return response ()->json($user);
    }
    
    public function showUser ($id){
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function findUser($name){
        $user = User::where('name', $name)->first();
        return response()->json($user);
    }

    public function listUser(){
        $user = User::all();
        return response()->json($user);
    }

    public function updateUser(Request $request, $id){
        $user = User::findOrFail($id);
        if($request->name){
            $user->name = $request->name;
        }
        if($request->age){
            $user->age = $request->age;
        }
        if($request->address){
            $user->address = $request->address;
        }
        if($request->phone){
            $user->phone = $request->phone;
        }
        if($request->email){
            $user->email = $request->email;
        }
        if($request->password){
            $user->password = $request->password;
        }
        $user->save();
        return response()->json($user);
    }

    public function deleteUser($id){
        User::destroy($id);
        return response()->json(['Deletado']);
    }
}
