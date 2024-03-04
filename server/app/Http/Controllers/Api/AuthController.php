<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\HasApiTokens;
use App\Models\User;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        try {
            $credentials = $request->only('username', 'password');
    
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
             
                $token = $user->createToken('api_token')->plainTextToken;

                $user->remember_token = $token;
                $user->save();

                $userArray = $user->toArray();

                unset($userArray['id']);
                unset($userArray['created_at']);
                unset($userArray['updated_at']);

                return response()->json(['success' => 'Logged in successfully', 'user' => $userArray, "token" => $token], 200);
            } else {
                return response()->json(['error' => 'Invalid username or password'], 401);
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function register(Request $request){
        $request->validate([
            'username' => 'required|unique:users',
            'password' => 'required|min:8',
        ]);
        try {
            $user = User::create([
                'username' => $request->username,
                'password' => bcrypt($request->password),
                "name"=> $request->name,
                "email"=> $request->email,
                "telephone"=> $request->telephone,
                "venueType"=> $request->venueType,
                "bookingDate"=> $request->bookingDate,
                "bookingHours"=> $request->bookingHours,
            ]);
            return response()->json(['success' => 'User created successfully', 'user' => $user], 201);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request)
    {
        $username = $request->username;
        $user = User::where('username', $username)->first();
    
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
    $user->venueType = $request->input('venueType');
    $user->bookingDate = $request->input('bookingDate');
    $user->bookingHours = $request->input('bookingHours');

    $user->save();

    $userArray = $user->toArray();

    unset($userArray['id']);
    unset($userArray['created_at']);
    unset($userArray['updated_at']);

    return response()->json(['message' => 'User updated successfully', 'user' => $userArray]);
    }

    public function getUserData(Request $request)
    {
        $token = $request->input('token');

    if (!$token) {
        return response()->json(['message' => 'Token not provided'], 400);
    }

    $user = User::where('remember_token', $token)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $userArray = $user->toArray();

    unset($userArray['id']);
    unset($userArray['created_at']);
    unset($userArray['updated_at']);

    return response()->json($userArray);
    }

}
