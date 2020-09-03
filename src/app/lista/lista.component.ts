import { Component, OnInit, Input } from '@angular/core';

import {Kategoria, ListableK, Varos, Orszag, Kontinens} from '../kategoria';
import {VAROS, ORSZAG, KONTINENS} from '../mock';
import { HelyekService } from '../helyek.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() kateg: Kategoria;
  @Input() lista: ListableK[];

  constructor() { }

  ngOnInit(): void {

  }


}
