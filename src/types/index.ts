export type Item = {
  name: string;
  quantity: number;
  totalPrice: number;
};

export type PizzaItem = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type CartItem = {
  pizzaId: number;
  unitPrice: number;
} & Item;

export type CartState = {
  cart: CartItem[];
};

export type Order = {
  id: number;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
};

export type GeoPosition = {
  latitude: number | undefined;
  longitude: number | undefined;
};

export enum Status {
  "idle",
  "loading",
  "error",
}

export type UserState = {
  username: string;
  status: Status;
  position: GeoPosition;
  address: string;
  error: string | undefined;
};

