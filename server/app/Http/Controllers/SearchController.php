<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;    

class SearchController extends Controller
{
    public function search(Request $request){
       $venueType = $request->venueType;
       $bookingDate = $request->bookingDate;
       $bookingHours = $request->bookingHours;

       $user = User::where('venueType', $venueType)
                   ->where('bookingDate', $bookingDate)
                   ->where('bookingHours', $bookingHours)
                   ->first();

       if ($user) {
           return response()->json(true);
       } else {
           return response()->json(false);
       }
    }
}
