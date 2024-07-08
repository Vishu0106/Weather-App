# Weather App

## Description

This Weather App is a responsive web application built with React and Tailwind CSS. It provides users with the current weather, a 7-day forecast, and visualized data for temperature trends.

## Features

- **Current Weather**: Displays the current weather conditions including temperature, humidity, and wind speed.
- **7-Day Forecast**: Shows a 6-day forecast with daily weather summaries.
- **Visualized Data**: Includes line and bar charts to represent temperature trends over the next 7 days.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chart.js / Recharts**: Libraries for data visualization.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Vishu0106/Weather-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to:

    ```plaintext
    http://localhost:3000
    ```

## Project Structure

```plaintext
weather-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── ForecastCard.jsx
│   │   ├── TemperatureChart.jsx
│   │   └── ...
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
