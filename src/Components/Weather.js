import React from 'react'
import Card from './Card';
import Data from "./Data"

const Weather = () => {
    
    return (
        <>
        <div className="container-lg my-5">
        <h1 className="h1-header display-2">5-Day Forecast.</h1>
        <div className="container-lg">
                <div className="city display-10 text-muted">New York, US</div>
                <div className="row align-items-center justify-content-center">
                    <div className="col"><Card days={Data[0].days[0]} tempdetails={Data[0].tempdetails[0]} cond={Data[0].conditions[0]} /></div>
                    <div className="col"><Card days={Data[0].days[1]} tempdetails={Data[0].tempdetails[1]} cond={Data[0].conditions[1]} /></div>
                    <div className="col"><Card days={Data[0].days[2]} tempdetails={Data[0].tempdetails[2]} cond={Data[0].conditions[2]} /></div>
                    <div className="col"><Card days={Data[0].days[3]} tempdetails={Data[0].tempdetails[3]} cond={Data[0].conditions[3]} /></div>
                    <div className="col"><Card days={Data[0].days[4]} tempdetails={Data[0].tempdetails[4]} cond={Data[0].conditions[4]} /></div>
                </div>
        </div>
        </div>
      
        </>
    )
}

export default Weather
