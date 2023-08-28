export interface IProducts {
  id: string;
  name: string;
  quantity: string;
  status: string;
  price: string;
  image?: string;
  created_at: string;
}

export interface RowsProducts {
  products: {
    rows: IProducts[];
    count: number;
  };
}
