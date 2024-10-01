import { StaticImageData } from "next/image";

export interface Topping {
    _id: string;
    name: string;
    image: StaticImageData | string;
    price: number;
    tenantId: number;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface CartItem {
    id: number
    name: string
    price: number
}

export interface CartState {
    items: CartItem[]
}