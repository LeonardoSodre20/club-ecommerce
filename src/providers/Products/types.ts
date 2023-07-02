export interface ProductsRows {
  products: {
    id: string;
    name: string;
    quantity: number;
    status: string;
    price: string;
    image?: string;
    created_at: string;
  };
}
