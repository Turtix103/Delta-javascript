import { ReactElement } from "react";
import { ListPropsInterface } from "../ListPropsInterface";
import Product from "./Product";

export default function List(props : ListPropsInterface ) : ReactElement  {
return (
    <div>
     {
        props.products.map((item, index: number) => {
            return <Product state={item.state} label={item.label} callback={() => {props.productCallback(index)}}></Product>
        }

        )
     }
    </div>
);
}