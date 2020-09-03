import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Varos, Orszag, Kontinens} from './kategoria';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const varosok=[
      {id: 1120985,name: "Zaranj"},
      {id: 1123004,name: "Taloqan"},
      {id: 174875,name: "Kapan"},
      {id: 174895,name: "Goris"}
    ];
    /*
    const ORSZAG=[
      {id: 1149361,name: "Afghanistan"},
      {id: 174982,name: "Armenia"}
    ];
    const KONTINENS=[
      {id: 3,name: "Asia"},
      {id: 4,name: "Europe"}
    ];
    //*/
    return {varosok};
  }
}
