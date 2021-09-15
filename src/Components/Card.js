import React from 'react'
import { WiDaySunny } from "react-icons/wi";


const Card = () => {
    return (
        <>
            <div className="card w-77" >
                    <div className="card-body text-center">
                            <h4 className="card-title">Friday</h4>
                            <p className="display-10 text-muted">March 1st,1:00 pm</p>
                            <WiDaySunny size="4em"/>
                            <h4>35 &deg;C</h4>
                            <p>Clear Sky</p>
                    </div>
            </div>
        </>
    )
}

export default Card
