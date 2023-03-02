import { ReactElement } from "react";
import { ListPropsInterface } from "../ListPropsInterface";
import Row from "./Row";

export default function Products(props : ListPropsInterface) : ReactElement  {
return (
    <div>
     <Row products={props.products} productCallback={props.productCallback}></Row>
    </div>
);
}