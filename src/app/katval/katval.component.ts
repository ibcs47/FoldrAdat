import { Component, OnInit } from '@angular/core';

import { Kategoria } from '../kategoria';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-katval',
  templateUrl: './katval.component.html',
  styleUrls: ['./katval.component.css']
})
export class KatvalComponent implements OnInit {

  kat = [Kategoria.Kont,Kategoria.Orsz,Kategoria.Varos];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSelect(kval: Kategoria){
    this.messageService.add(`Selected id=${kval}`);
  }

}
