export interface ListPropsInterface {
    productCallback: (index: number) => void;
    products: ProductInterface[]
}

export interface ProductInterface {
    label: string;
    state: number;
}