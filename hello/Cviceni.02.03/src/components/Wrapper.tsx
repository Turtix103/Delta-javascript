import { ReactElement } from "react";
import { ListPropsInterface } from "../ListPropsInterface";
import Products from "./Products";

export default function Wrapper(props : ListPropsInterface) : ReactElement  {
return (
    <div>
     <Products products={props.products} productCallback={props.productCallback}></Products>
    </div>
);
}