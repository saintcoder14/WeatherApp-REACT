import React from 'react'
import { WiCloud, WiDaySunny } from "react-icons/wi";

const Card = (props) => {
    var t = new Date().toLocaleTimeString();
    var d = new Date().toLocaleDateString();
    return (
        <>
            <div className="card w-77" >
            <div className="card-body text-center">
                    <h4 className="card-title">{props.days}</h4>
                    <p className="display-10 text-muted">{d}, {t}</p>
                    {
                        props.cond==="sunny"? <WiDaySunny size="4em"/>:<WiCloud size="4em"/>
                    }
                    <h4>{props.tempdetails}</h4>
                    <p>{props.cond}</p>
            </div>
            </div>
        </>
    )
}

export default Card
