import { Component, OnInit, Input } from '@angular/core';

import {Kategoria, ListableK, Varos, Orszag, Kontinens} from '../kategoria';
import {VAROS, ORSZAG, KONTINENS} from '../mock';
import { HelyekService } from '../helyek.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() kateg: Kategoria;
  @Input() lista: ListableK[];

  constructor() { }

  ngOnInit(): void {
  }

}
