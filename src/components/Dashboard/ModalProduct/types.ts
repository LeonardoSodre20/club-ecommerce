export interface IPropsModalComponent {
  textButton: string;
  getAllProductsRefresh(): Promise<void>;
}

export interface IPropsProduct {
  name: string;
  weight: number | null;
  status: string;
  price: number | null;
}
