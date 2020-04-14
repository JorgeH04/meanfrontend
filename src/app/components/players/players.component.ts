import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { NgForm } from '@angular/forms';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [ PlayerService ]
})
export class PlayersComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
    this.get();
  }


  add(form: NgForm) {
    //console.log(form.value)
    this.playerService.postPlayer(form.value)
        .subscribe(res => {
          console.log(res);
          this.reset(form);
          this.get();    
      
        });
  
  }

  get() {
    this.playerService.getPlayer()
      .subscribe(res => {
        this.playerService.players = res as Player[];
        console.log(res);
      });
  }
    
  deletePlayer(_id: string) {
    this.playerService.deletePlayer(_id)
    .subscribe(res => {
      console.log(res);
      this.get();
    });
    } 

  reset(form?: NgForm) {
      if (form) {     
        form.reset();   
        this.playerService.selectedPlayer = new Player();
         }
        }
      } 
    

      
      
      

