// ALL Recommandation are based on the weather condition. 
export const getSmartRecommendations = (weather) => {
    if (!weather) {
      return null;
    }

    switch (weather.condition) {
      case "clear":
        return {
          type: "clear",
          label: "Clear Sky",
          message: "It's a clear day outside. Great weather to go out!",
        };

      case "partly_cloudy":
        return {
          type: "partly_cloudy",
          label: "Partly Cloudy",
          message: "It's partly cloudy outside. You can enjoy your day!",
        };

      case "cloudy":
        return {
          type: "cloudy",
          label: "Cloudy",
          message: "It's cloudy outside. You may want to keep an umbrella nearby.",
        };

      case "fog":
        return {
          type: "fog",
          label: "Foggy",
          message: "It's foggy outside. Drive carefully and maintain a safe distance.",
        };

      case "drizzle":
        return {
          type: "drizzle",
          label: "Drizzle",
          message: "There's light drizzle outside. An umbrella may be useful.",
        };

      case "freezing_rain":
        return {
          type: "freezing_rain",
          label: "Freezing Rain",
          message: "Freezing rain is expected. Be extra careful while traveling.",
        };

      case "rain":
        return {
          type: "rain",
          label: "Rain",
          message: "It's raining outside. Carry an umbrella and drive carefully.",
        };

      case "snow":
        return {
          type: "snow",
          label: "Snow",
          message: "It's snowing outside. Stay warm and travel safely.",
        };

      case "showers":
        return {
          type: "showers",
          label: "Rain Showers",
          message: "Rain showers are expected. Keep an umbrella with you.",
        };

      case "thunderstorm":
        return {
          type: "thunderstorm",
          label: "Thunderstorm",
          message: "There's a thunderstorm outside. It's safer to stay indoors if possible.",
        };

      default:
        return {
          type: "unknown",
          label: weather.label || "Weather",
          message: "Check the weather conditions before heading outside.",
        };
    };
  };