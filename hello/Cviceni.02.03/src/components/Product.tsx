import { ReactElement } from "react";
import "./Product.css";

interface ProductPropsInterface {
    callback: () => void;
    label: string;
    state: number;
}

export default function Product(props : ProductPropsInterface) : ReactElement  {
return (
    <div>
     <button onClick={props.callback} className={props.state > 0 ? "used" : "unused"}>{props.label} </button>
    </div>
);
}