export interface IProduct {
  id: string;
  title: string; 
  price: number;
  image: string;
  description: string;
}

export interface IRates {
  EUR:number,
  JPY:number,
  GBP:number
}

export interface AppState {
  count: number;
  error: null | Error;
  lastUpdate: number;
  light: boolean;
  products: IProduct[] | null;
  rates: IRates | null
}
