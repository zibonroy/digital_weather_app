export function getWeatherTheme(description = '') {
  const type = description.toLowerCase();

  if (type.includes('thunder') || type.includes('storm')) {
    return {
      key: 'storm',
      background: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-800',
      overlay: 'bg-slate-950/20',
      card: 'bg-white/90',
      accent: 'text-indigo-700',
      title: 'text-white',
      subtitle: 'text-indigo-100',
      badge: 'bg-indigo-100 text-indigo-700',
      recommendation: 'bg-indigo-50 text-indigo-800',
      icon: '⛈️',
    };
  }

  if (type.includes('rain') || type.includes('drizzle') || type.includes('shower')) {
    return {
      key: 'rain',
      background: 'bg-gradient-to-br from-slate-700 via-blue-800 to-slate-900',
      overlay: 'bg-blue-950/20',
      card: 'bg-white/90',
      accent: 'text-blue-700',
      title: 'text-white',
      subtitle: 'text-blue-100',
      badge: 'bg-blue-100 text-blue-700',
      recommendation: 'bg-blue-50 text-blue-800',
      icon: '🌧️',
    };
  }

  if (type.includes('snow')) {
    return {
      key: 'snow',
      background: 'bg-gradient-to-br from-sky-100 via-white to-blue-200',
      overlay: 'bg-white/20',
      card: 'bg-white/80',
      accent: 'text-sky-700',
      title: 'text-slate-800',
      subtitle: 'text-slate-600',
      badge: 'bg-sky-100 text-sky-700',
      recommendation: 'bg-sky-50 text-sky-800',
      icon: '❄️',
    };
  }

  if (type.includes('cloud')) {
    return {
      key: 'cloudy',
      background: 'bg-gradient-to-br from-slate-200 via-blue-100 to-slate-300',
      overlay: 'bg-white/10',
      card: 'bg-white/85',
      accent: 'text-slate-700',
      title: 'text-slate-800',
      subtitle: 'text-slate-600',
      badge: 'bg-slate-100 text-slate-700',
      recommendation: 'bg-slate-50 text-slate-800',
      icon: '⛅',
    };
  }

  return {
    key: 'sunny',
    background: 'bg-gradient-to-br from-sky-300 via-blue-200 to-amber-100',
    overlay: 'bg-white/10',
    card: 'bg-white/85',
    accent: 'text-blue-700',
    title: 'text-blue-950',
    subtitle: 'text-blue-900/70',
    badge: 'bg-white/70 text-blue-700',
    recommendation: 'bg-emerald-50 text-emerald-800',
    icon: '☀️',
  };
}
