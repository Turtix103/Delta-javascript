import { ReactElement } from "react";
import List from "./List";
import { ListPropsInterface } from "../ListPropsInterface";

export default function Row(props : ListPropsInterface) : ReactElement  {
return (
    <div>
     <List products={props.products} productCallback={props.productCallback}></List>
    </div>
);
}