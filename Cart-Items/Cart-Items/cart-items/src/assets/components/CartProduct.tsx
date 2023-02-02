import {ProductInterface} from "../../App";
import {ReactElement} from "react";

interface ProductPropsInterface {
    product: ProductInterface;

    onIncrement: (product: ProductInterface) => void;
    onDecrement: (product: ProductInterface) => void;
    onDelete: (productId: number) => void;
}


export  default  function CartProduct(props: ProductPropsInterface) {
    return <div>
        <button
        className="btn btn-secondary"
        onClick={() => {
            props.onIncrement(props.product);
        }}>

        </button>
        {props.product.value}
    </div>;
}