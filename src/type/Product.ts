export interface Product{
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
}