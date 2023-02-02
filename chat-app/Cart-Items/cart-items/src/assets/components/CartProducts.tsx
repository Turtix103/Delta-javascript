import CartProduct from "./CartProduct";
import {ProductInterface} from "../../App";
import {ReactElement} from "react";

interface ProductsPropsInterface {
    product: ProductInterface[];
    onReset: () => void;
    onIncrement: (product: ProductInterface) => void;
    onDecrement: (product: ProductInterface) => void;
    onDelete: (productId: number) => void;
    onRestart: () => void;
}

const props = {
    counter: []
}



export  default  function CartProducts(props: ProductsPropsInterface) {
    return <div>
        {props.product.map(
            (product: ProductInterface): ReactElement => (
                <CartProduct
                key={product.id}
                product={product}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                onDelete={props.onDelete}
                />
            )
        )}
    </div>;
}