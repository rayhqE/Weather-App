# Weather App 

A simple Weather App built using **HTML, CSS, and JavaScript**.  
It shows real-time weather information by fetching data from the **OpenWeatherMap API** using the city name entered by the user.

---

##  JavaScript Logic (Simple & Short)

### 1️⃣ DOM Content Loaded

- JavaScript runs only after the page is fully loaded using `DOMContentLoaded`.
- All required elements (input, button, text areas) are accessed using `getElementById`.

---

### 2️⃣ Button Click & Input Handling

- When the **Get Weather** button is clicked:
  - The city name is taken from the input field.
  - Empty input is ignored to avoid unnecessary API calls.

---

### 3️⃣ Fetching Weather Data

- Uses `fetch()` with **async/await** to call the OpenWeatherMap API.
- City name and API key are passed in the URL.
- If the response is not valid, an error is thrown.

---

### 4️⃣ Displaying Weather Data

- Extracts required data like:
  - City name
  - Temperature (in °C)
  - Weather description
- Updates the DOM dynamically using `textContent`.

---

### 5️⃣ Error Handling

- If the city is not found or API fails:
  - Weather data is hidden.
  - Error message is displayed.
- Uses `try-catch` for clean error handling.

---

## Features

- Real-time weather data
- Clean and simple UI
- Proper error handling
- Uses modern JavaScript (`async/await`)

---
