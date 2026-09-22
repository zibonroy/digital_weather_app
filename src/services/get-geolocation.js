export const getGeoLocation = async (city) => {
    // console.log("City: ", city);
    const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;

    const res = await fetch(apiUrl);

    if(!res.ok){
        throw new Error(`Get Geolocation Data Faild!`);
    }

    const data = await res.json();
    // console.log("Data: ", data);
    const  place = data.results[0];
    // console.log(place);
    return {
        name: place.name,
        lat: place.latitude,
        long: place.longitude,
    };
 
};