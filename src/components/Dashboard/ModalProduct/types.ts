export interface IPropsModalComponent {
  textButton: string;
  getAllProductsRefresh: () => Promise<void>;
}

export interface IPropsProduct {
  name: string;
  quantity: number | null;
  status: string;
  price: string;
}
