// import axios from "axios";

import axios from "axios";

export const api = {

 async getWeather (coordinate) {
    const location = await axios.get(
        `https://www.metaweather.com/api/location/search${coordinate}`)
      
    const data = await axios.get(
        `http://www.metaweather.com/api/location/${location.data[0].woeid}/`)
        console.log(data)
    return data;
    
}

    
// https://cors-anywhere.herokuapp.com/

}