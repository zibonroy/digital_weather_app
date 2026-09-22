import { Thermometer } from "lucide-react";

export default function WeatherType({ weather }) {
  return (
    <>
      <div className="flex w-full min-w-0 flex-col items-center justify-around rounded-lg p-4 shadow-2xl sm:p-5 md:p-6">

        {/* Location */}
        <div className="w-full text-center">

          <h1 className="text-xl font-semibold text-blue-900 sm:text-2xl">
            Live in{" "}
            <span className="break-words text-2xl font-mono text-cyan-800 sm:text-3xl">
              {weather?.location}
            </span>
          </h1>
          
        </div>

        {/* Weather Info */}
        <div className="flex w-full flex-col items-center gap-5">

          {/* Description */}
          <div className="mt-6 mb-6 text-center sm:mt-8 sm:mb-10">
            <p className="break-words text-xl font-bold text-yellow-800 sm:text-2xl">
              {weather?.description}
            </p>
          </div>

          {/* Temperature */}
          <div className="flex flex-col items-center gap-2">

            <p className="text-sm font-semibold text-gray-600 sm:text-base">
              Temperature:
            </p>

            <div className="flex items-center gap-1.5">
              <Thermometer className="shrink-0 text-pink-500" />

              <p className="text-base font-medium text-gray-600 sm:text-lg">
                {weather?.feelsLike} C
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}