import { MapPin, Snail, Speech, Thermometer } from "lucide-react";
import Card from "./Card";

export default function WeatherCard({ weather }) {
  const cardStyle = [
    {
      icon: <Thermometer className="text-pink-500" />,
      label: "Feels Like",
      value: `${weather?.feelsLike}°C`,
    },
    {
      icon: <Speech className="text-green-900" />,
      label: "Humidity",
      value: `${weather?.humidity} %`,
    },
    {
      icon: <Snail className="text-blue-400" />,
      label: "Wind Speed",
      value: `${weather?.windSpeed} km/h`,
    },
  ];

  return (
    <div className="flex w-full flex-col items-start justify-start gap-4 px-2 py-4">

      <h1 className="text-3xl font-semibold text-gray-500">
        Today's Weather Details
      </h1>

      {/* Location */}
      <div className="flex w-full items-center gap-2">
        <MapPin size={25} className="shrink-0 text-blue-700" />

        <h2 className="truncate text-2xl font-semibold text-gray-700">
          {weather?.location}
        </h2>
      </div>

      {/* Temperature & Description */}
      <div className="flex w-full flex-col gap-3 py-2 sm:flex-row sm:items-center sm:justify-between">

        <h3 className="text-4xl font-bold text-purple-600 shadow-2xl">
          {weather?.temperature} °C
        </h3>

        <h2 className="text-xl font-bold text-yellow-900">
          {weather?.description}
        </h2>

      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cardStyle.map((item, index) => (
          <Card
            key={index}
            data={item}
          />
        ))}
      </div>

    </div>
  );
}