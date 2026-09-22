import { MapPin, Thermometer } from "lucide-react";
import { getWeatherTheme } from "../utils/weatherTheme";
import "../styles/weatherAnimation.css";

export default function WeatherTemplate({ weather }) {
  const theme = getWeatherTheme(weather?.description);

  return (
    <div
      className={`
        relative
        min-h-[500px]
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-white/40
        p-6
        shadow-2xl
        backdrop-blur-xl
        sm:min-h-[550px]
        sm:p-8
        lg:min-h-full
      `}
    >

      {/* Dynamic Background */}
      <div
        className={`
          absolute
          inset-0
          ${theme.background}
        `}
      />

      {/* Theme Overlay */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          ${theme.overlay}
        `}
      />

      {/* Animation */}
      <WeatherScene type={theme.key} />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[450px] flex-col items-center justify-between text-center">

        {/* Location */}
        <div className="pt-2">

          <div
            className={`
              mx-auto
              mb-3
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-white/30
              px-4
              py-2
              text-sm
              font-semibold
              shadow-lg
              backdrop-blur-md
              ${theme.title}
            `}
          >
            <MapPin size={17} />

            <span>
              Live in
            </span>
          </div>

          <h2
            className={`
              break-words
              text-4xl
              font-black
              sm:text-5xl
              ${theme.title}
            `}
          >
            {weather?.location || "Your Location"}
          </h2>

        </div>

        {/* Weather Icon + Description */}
        <div className="flex flex-col items-center">

          <div
            className={`
              text-8xl
              drop-shadow-2xl
              sm:text-9xl
              ${getAnimationClass(theme.key)}
            `}
          >
            {theme.icon}
          </div>

          <p
            className={`
              mt-5
              text-2xl
              font-black
              capitalize
              sm:text-3xl
              ${theme.title}
            `}
          >
            {weather?.description || "Loading..."}
          </p>

        </div>

        {/* Temperature */}
        <div
          className="
            rounded-2xl
            border
            border-white/30
            bg-white/20
            px-7
            py-4
            shadow-xl
            backdrop-blur-md
          "
        >

          <p
            className={`
              text-xs
              font-bold
              uppercase
              tracking-widest
              ${theme.title}
            `}
          >
            Temperature
          </p>

          <div
            className={`
              mt-1
              flex
              items-center
              justify-center
              gap-2
              text-2xl
              font-black
              ${theme.title}
            `}
          >
            <Thermometer
              size={24}
              className="text-pink-400"
            />

            {weather?.feelsLike ?? "--"}°C
          </div>

        </div>

      </div>
    </div>
  );
}


/* ================= WEATHER SCENE ================= */

function WeatherScene({ type }) {

  /* RAIN */
  if (type === "rain") {
    return (
      <div className="weather-scene">

        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="weather-rain-drop"
            style={{
              left: `${(index * 17) % 105}%`,
              animationDuration: `${0.6 + (index % 5) * 0.15}s`,
              animationDelay: `${(index % 8) * 0.12}s`,
            }}
          />
        ))}

      </div>
    );
  }

  /* SNOW */
  if (type === "snow") {
    return (
      <div className="weather-scene">

        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="weather-snow-flake"
            style={{
              left: `${(index * 23) % 105}%`,
              animationDuration: `${3 + (index % 5) * 0.7}s`,
              animationDelay: `${(index % 9) * 0.25}s`,
            }}
          >
            ❄
          </span>
        ))}

      </div>
    );
  }

  /* STORM */
  if (type === "storm") {
    return (
      <div className="weather-scene">

        <div className="weather-lightning absolute left-1/2 top-1/3 -translate-x-1/2 text-8xl">
          ⚡
        </div>

        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="weather-rain-drop"
            style={{
              left: `${(index * 19) % 105}%`,
              animationDuration: `${0.5 + (index % 4) * 0.12}s`,
              animationDelay: `${(index % 7) * 0.1}s`,
            }}
          />
        ))}

      </div>
    );
  }

  /* CLOUDY */
  if (type === "cloudy") {
    return (
      <div className="weather-scene">

        <div className="weather-cloud absolute left-8 top-24 text-7xl opacity-80">
          ☁️
        </div>

        <div
          className="weather-cloud absolute right-10 top-40 text-6xl opacity-60"
          style={{ animationDelay: "1s" }}
        >
          ☁️
        </div>

      </div>
    );
  }

  /* SUNNY */
  return (
    <div className="weather-scene">

      <div className="weather-sun absolute right-8 top-12 text-8xl">
        ☀️
      </div>

    </div>
  );
}


/* ================= ICON ANIMATION ================= */

function getAnimationClass(type) {
  if (type === "rain") return "weather-rain-icon";

  if (type === "storm") return "weather-storm-icon";

  if (type === "cloudy") return "weather-cloud-icon";

  if (type === "snow") return "weather-snow-icon";

  return "weather-sunny-icon";
}
