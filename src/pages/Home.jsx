import { useState } from "react";
import LocationModel from "../components/LocationModel";

export default function Home() {
  const [click, setClick] = useState(false);
  // console.log(click);

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        
        <div className="flex min-h-screen items-center justify-center">
          
          {/* Main Card */}
          <div className="w-full max-w-xl rounded-3xl border border-white/70 bg-white/80 p-6 shadow-2xl shadow-blue-100 backdrop-blur-sm sm:p-8 md:p-10">
            
            {/* Top Badge */}
            <div className="mb-5 flex justify-center">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm">
                🌤️ Weather Information
              </span>
            </div>

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-blue-500 sm:text-4xl md:text-5xl">
                <span className="text-purple-400">Digital</span>{" "}
                Weather App
              </h1>

              <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-gray-500 sm:text-base">
                Check your weather today in your area.
              </p>
            </div>

            {/* Weather Illustration Card */}
            <div className="my-7 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
              <div className="rounded-2xl bg-white px-5 py-6 text-center">
                <div className="mb-3 text-5xl">
                  🌤️
                </div>

                <h2 className="text-lg font-bold text-gray-700">
                  Know Your Weather
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Get current weather information for your location.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => setClick(true)}
              type="button"
              className="w-full cursor-pointer rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:translate-y-0 active:scale-[0.98] sm:py-4 sm:text-base"
            >
              Check Weather
            </button>

            {/* Small Bottom Text */}
            <p className="mt-4 text-center text-xs font-medium text-gray-500">
              Select your location to continue
            </p>

          </div>
        </div>

        {/* Location Modal */}
        {click && (
          <LocationModel onClose={() => setClick(false)} />
        )}
      </div>
    </>
  );
}