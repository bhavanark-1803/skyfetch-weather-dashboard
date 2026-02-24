const API_KEY = "6f98e5c0eaa7beef47f8ec6d04337ca8 "; // Replace with your actual API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
function getWeather(city) {
  // Build the complete URL
  const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  // Make API call using Axios
  axios
    .get(url)
    .then(function (response) {
      // Success! We got the data
      console.log("Weather Data:", response.data);
      displayWeather(response.data);
    })
    .catch(function (error) {
      // Something went wrong
      console.error("Error fetching weather:", error);
      document.getElementById("weather-display").innerHTML =
        '<p class="loading">Could not fetch weather data. Please try again.</p>';
    });
}

// Function to display weather data
function displayWeather(data) {
  // Extract the data we need
  const cityName = data.name;
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Create HTML to display
  const weatherHTML = `
        <div class="weather-info">
            <h2 class="city-name">${cityName}</h2>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
            <div class="temperature">${temperature}°C</div>
            <p class="description">${description}</p>
        </div>
    `;

  // Put it on the page
  document.getElementById("weather-display").innerHTML = weatherHTML;
}

// Call the function when page loads
getWeather("London");

function getWeather(city) {
  axios
    .get(url)
    .then(function (response) {
      displayWeather(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
async function getWeather(city) {
  try {
    const response = await axios.get(url);
    displayWeather(response.data);
  } catch (error) {
    console.error(error);
  }
}
// Async function to fetch weather data
async function getWeather(city) {
  // Build the API URL (replace YOUR_API_KEY with your actual API key)
  const apiKey = "6f98e5c0eaa7beef47f8ec6d04337ca8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    // Fetch data using axios with await
    const response = await axios.get(url);

    // Log the full response for debugging
    console.log(response);

    // Call displayWeather with the actual data
    displayWeather(response.data);
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching weather:", error);

    // Call a function to show user-friendly error
    showError(
      "Could not fetch weather data. Please check the city name or try again later.",
    );
  }
}
function showError(message) {
  // Select the weather display container
  const weatherDisplay = document.getElementById("weather-display");

  // Create HTML for the error message
  weatherDisplay.innerHTML = `
        <div style="
            background-color: #ffdddd;
            color: #d8000c;
            border: 1px solid #d8000c;
            padding: 15px 20px;
            border-radius: 12px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
        ">
            <span>❌</span>
            <span>${message}</span>
        </div>
    `;
}
const errorHTML = `
    <div class="error-message" style="
        background-color: #ffe6e6;
        color: #d8000c;
        border: 1px solid #d8000c;
        padding: 15px 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        margin-top: 20px;
    ">
        <span>⚠️</span>
        <div>
            <div>Error!</div>
            <div>Please check the city name or try again.</div>
        </div>
    </div>
`;
document.getElementById("weather-display").innerHTML = errorHTML;

// Get references to HTML elements
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

// Function to handle search
function handleSearch() {
  const city = cityInput.value.trim(); // Get city name and remove extra spaces
  if (city === "") {
    showError("Please enter a city name."); // Show error if input is empty
    return;
  }
  getWeather(city); // Call the async function to fetch weather
}

// Add click event listener to the search button
searchBtn.addEventListener("click", handleSearch);

// BONUS: Add Enter key support
cityInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearch(); // Trigger the same search logic
  }
});
// Remove or comment out the test call
// getWeather('London');

// Show a welcome message instead
const weatherDisplay = document.getElementById("weather-display");
weatherDisplay.innerHTML = `
    <div style="
        text-align: center;
        padding: 20px;
        font-size: 1.2rem;
        color: #333;
    ">
        🌤️ Welcome! Enter a city name above and click "Search" to see the weather.
    </div>
`;
document.getElementById("weather-display").innerHTML = `
    <div class="welcome-message" style="
        text-align: center;
        padding: 20px;
        font-size: 1.2rem;
        color: #333;
    ">
        🌤️ Enter a city name above to get started!
    </div>
`;
function showLoading() {
  const weatherDisplay = document.getElementById("weather-display");

  // HTML for loading spinner and text
  weatherDisplay.innerHTML = `
        <div class="loading-message" style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-size: 1.2rem;
            color: #333;
            gap: 10px;
        ">
            <div class="spinner" style="
                border: 4px solid #f3f3f3;
                border-top: 4px solid #4a90e2;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
            "></div>
            <div>Loading...</div>
        </div>
    `;

  // Add keyframes for spinner animation dynamically (if not in CSS)
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
  document.head.appendChild(style);
}
const loadingHTML = `
    <div class="loading-container" style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 10px;
        font-size: 1.2rem;
        color: #333;
    ">
        <!-- Spinner -->
        <div class="spinner" style="
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4a90e2;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        "></div>
        <!-- Loading text -->
        <div>Loading...</div>
    </div>
`;

// Optional: Add spinner animation keyframes dynamically if not in CSS
const style = document.createElement("style");
style.innerHTML = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

async function getWeather(city) {
  // Show loading spinner immediately
  showLoading();

  const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    // Replace loading with weather data
    displayWeather(response.data);
  } catch (error) {
    console.error("Error fetching weather:", error);

    // Different messages for different error types
    if (error.response) {
      // Server responded with a status code outside 2xx
      if (error.response.status === 404) {
        showError(
          `City "${city}" not found. Please check the spelling and try again.`,
        );
      } else if (error.response.status === 401) {
        showError("Invalid API key. Please check your API key.");
      } else {
        showError(
          `Server error: ${error.response.status}. Please try again later.`,
        );
      }
    } else if (error.request) {
      // Request was made but no response received
      showError(
        "No response from server. Please check your internet connection.",
      );
    } else {
      // Something else happened
      showError("An unexpected error occurred. Please try again.");
    }
  }
}
if (error.response) {
  // Server responded with a status code outside 2xx
  if (error.response.status === 404) {
    showError(
      `City "${city}" not found. Please check the spelling and try again.`,
    );
  } else if (error.response.status === 401) {
    showError("Invalid API key. Please check your API key.");
  } else {
    showError(
      `Server error: ${error.response.status}. Please try again later.`,
    );
  }
} else if (error.request) {
  // Request was made but no response received
  showError("No response from server. Please check your internet connection.");
} else {
  // Something else went wrong
  showError("An unexpected error occurred. Please try again.");
}
function handleSearch() {
  const city = cityInput.value.trim(); // Remove leading/trailing spaces

  // Validation 1 & 2: Empty or only spaces
  if (!city) {
    showError("Please enter a city name.");
    return;
  }

  // Validation 3: Minimum length
  if (city.length < 2) {
    showError("City name must be at least 2 characters long.");
    return;
  }

  // Passed all validations → fetch weather
  getWeather(city);
}

// Event listeners
searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});
async function getWeather(city) {
  showLoading();

  // Disable search button to prevent multiple clicks
  searchBtn.disabled = true;
  searchBtn.textContent = "Searching...";

  const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    displayWeather(response.data);
  } catch (error) {
    console.error("Error fetching weather:", error);

    if (error.response) {
      if (error.response.status === 404) {
        showError(
          `City "${city}" not found. Please check the spelling and try again.`,
        );
      } else if (error.response.status === 401) {
        showError("Invalid API key. Please check your API key.");
      } else {
        showError(
          `Server error: ${error.response.status}. Please try again later.`,
        );
      }
    } else if (error.request) {
      showError(
        "No response from server. Please check your internet connection.",
      );
    } else {
      showError("An unexpected error occurred. Please try again.");
    }
  } finally {
    // Re-enable search button
    searchBtn.disabled = false;
    searchBtn.textContent = "Search";
  }
}
function displayWeather(data) {
  // ... your existing code to render weather ...
  const weatherDisplay = document.getElementById("weather-display");

  weatherDisplay.innerHTML = `
        <div class="weather-info">
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ ${data.main.temp} °C</p>
            <p>🌤️ ${data.weather[0].description}</p>
            <p>💨 Wind: ${data.wind.speed} m/s</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        </div>
    `;

  // Focus the input so the user can quickly search again
  cityInput.focus();
}
