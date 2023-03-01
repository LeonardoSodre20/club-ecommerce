export interface IPropsModalComponent {
  textButton: string;
  getAllProductsRefresh: () => Promise<void>;
}

export interface IPropsProduct {
  name: string;
  amount: number | null;
  status: string;
  price: string;
}
