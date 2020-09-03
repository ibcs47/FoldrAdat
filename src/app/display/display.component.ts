import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Kategoria} from '../kategoria';
import { MessageService } from '../message.service';
import {ListableK, Varos, Orszag, Kontinens} from '../kategoria';
import {VAROS, ORSZAG, KONTINENS} from '../mock';
import { HelyekService } from '../helyek.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  katg: Kategoria;
  megje: string="lista";
  strlista: string="lista";
  strgrid: string="grid";
  list: ListableK[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private helyekService: HelyekService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.katg=(this.route.snapshot.paramMap.get('kat') as Kategoria);
    if(this.katg==Kategoria.Varos){
      this.getVarosok();
    }
    else if(this.katg==Kategoria.Orsz){
      this.getOrszagok();
    }
    else if(this.katg==Kategoria.Kont){
      this.getKontinensek();
    }
  }
  changeDisp(d: string): void{
    this.megje=d;
    //this.messageService.add(`Selected d=${d}`);
  }


  getVarosok(): void {
    this.helyekService.getVarosok().subscribe(varosok => this.list=varosok);
  }
  getOrszagok(): void{
    this.helyekService.getOrszagok().subscribe(orsz => this.list=orsz);
  }
  getKontinensek(): void{
    this.helyekService.getKontinensek().subscribe(kont => this.list=kont);
  }

}
