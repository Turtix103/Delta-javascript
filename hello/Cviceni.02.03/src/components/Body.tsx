import { ReactElement } from "react";
import { ListPropsInterface } from "../ListPropsInterface";
import Wrapper from "./Wrapper";

export default function Body(props : ListPropsInterface) : ReactElement  {
return (
    <div>
     <Wrapper products={props.products} productCallback={props.productCallback}></Wrapper>
    </div>
);
}