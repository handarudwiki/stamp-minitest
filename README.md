# Stamp THT Mini Test

This repository contains two mini test solutions for the Stamps Developer role application:

1. **Small Program** – Number transformation based on rules  
2. **Weather Forecast** – Display 5-day forecast for Jakarta using OpenWeatherMap API

---

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) installed (version 14+ recommended).

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/stamp-tht.git
cd stamp-tht
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Setup environment variables:
Create a `.env` file in the root directory with the following content:
```env
WEATHER_API_KEY=your_api_key_here
```

🔑 You can get a free API key by signing up at: https://openweathermap.org/api

---

## 🚀 Running the Scripts

### 🔁 Small Program (Reverse list with rules)
```bash
npm run program
```

### ☁️ Weather Forecast for Jakarta (Next 5 days)
```bash
npm run weather
```

---

## ✅ Notes

The small program prints numbers 1–100 in reverse with special substitutions:
- Replace numbers divisible by 3 → **Foo**
- Replace numbers divisible by 5 → **Bar**
- Replace divisible by both → **FooBar**
- Skip prime numbers

The weather forecast script shows the temperature once per day for the next 5 days in Jakarta using the OpenWeatherMap API.

---

Feel free to reach out if you have any questions.