import {ReactElement} from "react";
import "./Map.css";

interface MapProptsInterface {
    mapItems:null[];
    onClickHandler: (index: number) => void;
    winner: string | null;
 //   setMapItem: (index: number) => { Console.log("Click on index" + index); }
}
export default function Map(props: MapProptsInterface):ReactElement{
    return <div>
        props.winner !== null && <div>
           <h1> Winner: {props.winner} </h1> 
        </div>
        <div className="mapWrapper">
            {props.mapItems.map((el, index) => {
                return (
                    <div key={index} className="mapItem" onClick={()=> props.onClickHandler(index)}>
                    {index}:{el}
                    </div>
                );
            })}
        </div>
        Next player:
    </div>;
}