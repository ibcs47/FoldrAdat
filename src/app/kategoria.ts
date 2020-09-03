
export enum Kategoria{
  Kont="Kontinensek",
  Orsz="Országok",
  Varos="Városok"
}

export interface ListableK{
  id: number;
  name: string;
}

export interface Varos extends ListableK{

}

export interface Orszag extends ListableK{

}

export interface Kontinens extends ListableK{

}
