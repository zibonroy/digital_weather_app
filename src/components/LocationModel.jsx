import { X,MapPin } from "lucide-react";
import { useState } from "react";
import { getGeoLocation } from "../services/get-geolocation";
import { useNavigate } from "react-router";


export default function LocationModel({onClose}) {
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const goToPage = (location) =>{
        navigate('/weather',{state: {location}});
    } 


    const handleSubmit = async (e)=>{
        e.preventDefault();
       
        const cityName = city.trim();
        if(cityName.length === 0){
          setError('Please enter a city name');
          return;
        }

        setCity('');
        
        try{
            const locationData = await getGeoLocation(cityName);
            // console.log(locationData);
            if(!locationData){
               setError(`Get Geolocation Data Faild!`);
               return;
            }
            goToPage(locationData);

        }catch(error){
            setError(error.message);
        }

    };

    const handleCurrentLocation = ()=>{
        navigator.geolocation.getCurrentPosition((positions)=>{
            const {latitude,longitude} = positions.coords;
            // console.log(`Latitude code: ${latitude} and Longitude code: ${longitude} `);
            goToPage({name:"Device Locations",lat:latitude,long:longitude});
        },(error)=>{
            setError(error.message);
        },{
            timeout:10000,
        })
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950/60">
            <div className="w-[380px] h-[350px] rounded-2xl bg-gray-100 px-8 py-5 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium text-gray-600">
                        Where are you today?
                    </h2>

                    <button 
                        onClick={onClose}
                        className="group cursor-pointer rounded-full border border-gray-200 bg-white p-2 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:scale-95 "
                    >
                        <X
                            size={22}
                            className="text-gray-600 transition-transform duration-300 group-hover:rotate-90"
                        />
                    </button>
                </div>

                <div className="mt-6 space-y-4">

                    <form  
                    onSubmit={handleSubmit}
                    className="space-y-4"> 
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                City name
                            </label>

                            <input
                                onChange={(e)=> setCity(e.target.value)}
                                value={city}
                                type="text"
                                placeholder="Enter your city name"
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-gray-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
                        >
                            Get Weather
                        </button>
                    </form>

                    <div className="flex items-center gap-3 py-1">

                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                            or
                        </span>
                        <div className="h-px flex-1 bg-gray-200"></div>

                    </div>

                    <button
                        onClick={handleCurrentLocation}
                        type="button"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.98]"
                    >
                        <span>
                            <MapPin size={18}/>
                        </span>
                        Use my current location
                    </button>

                </div>
                {
                    error && (
                        <p className="text-red-700 font-medium text-center text-[12px]">{error}</p>
                    )
                }

            </div>
        </div>
    );
}



