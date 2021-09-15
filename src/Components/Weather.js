import React from 'react'
import Card from './Card';

const Weather = () => {
    return (
        <>
        <div className="container-lg my-5">
        <h1 className="h1-header display-2">5-Day Forecast.</h1>
        <div className="container-lg">
        
                <div className="city display-10 text-muted">New York, US</div>
                <div className="row align-items-center justify-content-center">
                    <div className="col"><Card/></div>
                    <div className="col"><Card/></div>
                    <div className="col"><Card/></div>
                    <div className="col"><Card/></div>
                    <div className="col"><Card/></div>
                </div>
        </div>
        </div>
      
        </>
    )
}

export default Weather
