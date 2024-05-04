<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SuperheroController extends Controller
{
    const HOST = 'superhero-search.p.rapidapi.com';
    const KEY = '5e21b2eb21mshfc569f27e574393p1827f5jsn7957efbddeec';

    public function index(){
        $client = new Client();
        $response = $client->get('https://superhero-search.p.rapidapi.com/api/heroes', [
            'headers' => [
                'X-RapidAPI-Host' => self::HOST,
                'X-RapidAPI-Key' => self::KEY
            ],
            'verify' => false
        ]);

        $superheroes = json_decode($response->getBody(), true);

        return response()->json($superheroes);
    }

    public function show($superheroe){
        $client = new Client();
        $response = $client->get('https://superhero-search.p.rapidapi.com/api/?hero=' . $superheroe, [
            'headers' => [
                'X-RapidAPI-Host' => self::HOST,
                'X-RapidAPI-Key' => self::KEY
            ],
            'verify' => false
        ]);
        $superheroe = json_decode($response->getBody(), true);
        return response()->json($superheroe);
    }
}
