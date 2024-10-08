export interface ProductItemType {
  id: string;
  image: string;
  title: string;
  price: string;
  company: string;
  description: string;
}

export interface CartItemType extends ProductItemType {
  quantity: number;
  totalPrice: number;
}
