import dotenv from "dotenv";
dotenv.config();

function formatShortDate(dt_txt) {
  const date = new Date(dt_txt);
  const day = date.toLocaleDateString("en-GB", { weekday: "short" }); 
  const formatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); 
  return `${day}, ${formatted}`;
}

async function getFormattedForecast(lat, lon) {
  const apiKey = process.env.WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error:", response.status, errorText);
    return;
  }

  const data = await response.json();
  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 6); 

  console.log("Weather Forecast:");
  for (const item of daily) {
    const dateFormatted = formatShortDate(item.dt_txt);
    const temp = item.main.temp.toFixed(2);
    console.log(`${dateFormatted}: ${temp}°C`);
  }
}

const latJakarta = -6.2088;
const lonJakarta = 106.8456;

await getFormattedForecast(latJakarta, lonJakarta);
