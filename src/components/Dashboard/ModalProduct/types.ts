export interface IPropsModalComponent {
  textButton: string;
}

export interface IPropsProduct {
  name: string;
  quantity: number | null;
  status: string;
  price: string;
  categoryName: string;
}

export interface ICategoryByProducts {
  id: string;
  name: string;
}
