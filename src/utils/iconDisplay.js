export default function iconDisplay(w) {
  switch (w.weather[0].main) {
    case "Rain":
      return "🌧";
    case "Clouds":
      return "⛅️";
    case "Clear":
      return "☀️";
    case "Snow":
      return "🌨";
    default:
      return "🌤";
  }
}
