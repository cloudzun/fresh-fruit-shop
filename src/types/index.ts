export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    emoji: string;
    unit: string;
}

export interface CartItem extends Product {
    quantity: number;
}