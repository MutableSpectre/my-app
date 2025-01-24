import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Please enter a city..." className="Form-Search" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="search" className="btn btn-primary w-100" />
                    </div> 
                </div>
            </form>
            <h1 className="City">Lansing</h1>
            <ul>
                <li>Thursday 10:05</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left" />
                            <span className="Temperature">6</span>
                            <span className="Unit">°C</span>
                    </div> 
                </div> 
                <div className="col-6">
                    <ul>
                        <li>Percipitation: 15%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}