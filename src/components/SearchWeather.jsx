import React, { useState, useEffect } from 'react';
import MoonLoader from "react-spinners/MoonLoader";

const SearchWeather = () => {

    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");


    // component mounted 
    let componentMounted = true
    
    // Fetching data from API
    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7e16019b93627a8353b069a9121aac17`);
            if (componentMounted) {
                setData(await response.json());
                console.log(data)
            } 
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
    }, [search]);


    
    // Emoji change
    let emoji = null;
    if (typeof data.main != "undefined") {
        if (data.weather[0].main === "Clouds") {
            emoji = "fa-cloud"
        } else if (data.weather[0].main === "Thunderstorm") {
            emoji = "fa-bolt"
        } else if (data.weather[0].main === "Drizzle") {
            emoji = "fa-cloud-rain"
        } else if (data.weather[0].main === "Rain") {
            emoji = "fa-cloud-shower-heavy"
        } else if (data.weather[0].main === "Snow") {
            emoji = "fa-snow-flake"
        } else {
            emoji = "fa-smog"
        }
    } else {
        return (
            <div className="loading">
                <div className="loading-container">
                    <MoonLoader color="#36d7b7" />
                </div>
            </div>
        )
    }

    //Temperature
    let temp = (data.main.temp - 273.15).toFixed(2);
    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    let temp_max = (data.main.temp_max - 273.15).toFixed(2);

    //Date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", { month: 'long' });
    let day = d.toLocaleString("default", { weekday: 'long' });

    //Time
    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    return (
        <div className='container-father'>
            <div className="container-con-box">
                <div className="container-box">
                    <div className="col-md-4">
                        <div className="card text-white text-center border-0">
                            <img src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`} class="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-4 w-75 mx-auto">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Search City"
                                            aria-label="Search City"
                                            aria-describedby="basic-addon2"
                                            name="search"
                                            input={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            required
                                        />
                                        <button type="submit" class="input-group-text" id="basic-addon2">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="bg-dark bg-opacity-50 ">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p className="card-text lead">
                                        {day}, {month} {date}, {year}
                                        <br />
                                        {time}
                                    </p>
                                    <hr />
                                    <i className={`fas ${emoji} fa-4x`}></i>
                                    <h1 className="fw-bolder">{temp}&deg;C</h1>
                                    <p className="lead fw-bolder mb-0">{data.weather[0].main} </p>
                                    <p className="lead">{temp_min} | {temp_max} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchWeather