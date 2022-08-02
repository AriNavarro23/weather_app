import React from 'react';

const SearchWeather = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div class="card text-white text-center border-0">
                            <img src="https://source.unsplash.com/600x900/?nature,water" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <form>
                                    <div class="input-group mb-4 w-75 mx-auto">
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Search City" 
                                            aria-label="Search City" 
                                            aria-describedby="basic-addon2" 
                                        />
                                        <button type="submit" class="input-group-text" id="basic-addon2">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="bg-dark bg-opacity-50 py-3">
                                    <h2 class="card-title">London</h2>
                                    <p class="card-text lead">
                                        Thursday, October 14, 2022
                                    </p>
                                    <hr />
                                    <i className="fas fa-cloud fa-4x"></i>
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