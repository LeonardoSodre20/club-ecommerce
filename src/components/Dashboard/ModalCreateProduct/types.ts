export interface IPropsModalComponent {
  textButton: string;
}

export interface IPropsProduct {
  name: string;
  quantity: any;
  status: string;
  price: string;
  image: File | null;
  categoryName: string;
}

export interface ICategoryByProducts {
  id: string;
  name: string;
}
