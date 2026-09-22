# Weather UI Template

This template is designed for a React + TailwindCSS weather app.

## Files

- `components/WeatherTemplate.jsx` — responsive weather dashboard UI
- `utils/weatherTheme.js` — automatically selects a visual theme from `weather.description`

## Usage

```jsx
import WeatherTemplate from './template/components/WeatherTemplate';

<WeatherTemplate
  weather={weather}
  recommendation={getSmartRecommendations(weather)}
/>
```

The theme changes automatically for:

- Sunny / clear
- Cloudy
- Rain / drizzle / shower
- Snow
- Thunderstorm / storm

No extra weather API is required for the theme system; it uses the description already returned by your weather data.
