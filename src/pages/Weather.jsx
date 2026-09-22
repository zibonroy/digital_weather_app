import { Link, useLocation } from "react-router";
import { getWeather } from "../services/get-weather";
import { useEffect, useState } from "react";
import Recommandation from "../components/Recommandation";
import WeatherCard from "../components/WeatherCard";
import { getSmartRecommendations } from "../utils/getRecommandation";
import WeatherTemplate from "../template/components/WeatherTemplate";
import { ChevronLeft,MapPin } from "lucide-react";
import LocationModel from "../components/LocationModel";

export default function Weather() {
  const value = useLocation();
  const place = value.state.location;
  const [weather, setWeather] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!place) {
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);

      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false);
        setOpen(false);
      }
    };

    fetchWeather();
  }, [place]);

  return (
    <div className="w-full bg-gray-200 py-1 sm:py-12 lg:py-2">
      {
        loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          </div>
        )
      }
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:py-1">

        {/* Back Button */}
          <Link 
          to={'/'} 
          className="
            inline-flex
            items-center
            gap-1
            rounded-xl
            border
            border-gray-200
            bg-white
            px-3
            py-2
            text-sm
            font-semibold
            text-gray-600
            shadow-sm
            transition-all
            duration-200
            hover:-translate-x-0.5
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            hover:shadow-md
            active:scale-95
            cursor-pointer
          "
          >
            <ChevronLeft size={18} />
            <span>Back</span>
          </Link>

        {/* Change Location Button */}
        <button
          onClick={() => setOpen(true)}
          type="button"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-blue-500
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-md
            shadow-blue-200
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-lg
            active:scale-95
            cursor-pointer
          "
        >
          <MapPin size={17} />
          <span>Change Location</span>
        </button>

      </div>
      
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/*Weather Details */}
        <div className="w-full rounded-lg p-4 shadow-2xl">
          <div className="w-full space-y-3">

            {/* Weather Card */}
            <WeatherCard weather={weather} />

            {/* Recommandations */}
            <Recommandation
              recommandation={getSmartRecommendations(weather)}
            />

          </div>
        </div>

        {/* Weather type with Dynamic */}
        <WeatherTemplate weather={weather} />

      </div>
      {open && <LocationModel onClose={() => setOpen(false)}/>}
    </div>
  );
}