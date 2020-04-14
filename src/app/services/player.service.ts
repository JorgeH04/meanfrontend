import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';

import { PlayersComponent } from '../components/players/players.component';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  selectedPlayer: Player;
  players: Player[];
  //readonly URL_API = 'http://localhost:3000';
  readonly URL_API = 'https://servermeanjor.herokuapp.com';

  constructor(private http: HttpClient) { 
    this.selectedPlayer = new Player();
  }

  getPlayer() {
    return this.http.get(this.URL_API);
  }

  postPlayer(player: Player) {
    return this.http.post(this.URL_API, player);
  } 

  //putPlayer(player: Player) {
   // return this.http.put(this.URL_API + `/${player._id}`, player);
 // }

  deletePlayer(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
