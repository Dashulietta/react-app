import React from "react";
import axios from "axios";

export default function Weather() {
    function handleResponse(response){
        alert (`The weather in London is ${response.data.main.temp}C`);
    }
    let apiKey = "9a26aeeafb7f3d9e16e58f5effdd59d0";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Search"
}