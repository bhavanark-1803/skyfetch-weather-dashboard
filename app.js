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

// Create WeatherApp Constructor Function
function WeatherApp(apiKey) {
  // Store the API key
  this.apiKey = apiKey;

  // Store the API URLs
  this.apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  this.forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";

  // Get references to DOM elements and store them
  this.searchBtn = document.getElementById("search-btn");
  this.cityInput = document.getElementById("city-input");
  this.weatherDisplay = document.getElementById("weather-display");

  // Call init method to set up event listeners
  this.init();
}
WeatherApp.prototype.init = function () {
  // Add click event listener to search button
  this.searchBtn.addEventListener("click", this.handleSearch.bind(this));

  // Add keypress event listener to input (Enter key)
  this.cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  });

  // Display welcome message
  this.showWelcome();
};

// Without bind - this will be undefined
this.searchBtn.addEventListener("click", this.handleSearch);

// With bind - this will refer to WeatherApp instance
this.searchBtn.addEventListener("click", this.handleSearch.bind(this));

WeatherApp.prototype.showWelcome = function () {
  // Create welcome HTML
  const welcomeHTML = `
        <div class="welcome-message">
            <div class="welcome-icon">🌤️</div>
            <h2>Welcome to Weather App</h2>
            <p>Enter a city name above and click Search to see the current weather forecast.</p>
        </div>
    `;

  // Display in weather display area
  this.weatherDisplay.innerHTML = welcomeHTML;
};

const app = new WeatherApp("6f98e5c0eaa7beef47f8ec6d04337ca8");

WeatherApp.prototype.handleSearch = function () {
  // Get city from input
  const city = this.cityInput.value.trim();

  // Validate input - Empty check
  if (!city) {
    this.showError("Please enter a city name.");
    return;
  }

  // Validate input - Minimum length check
  if (city.length < 2) {
    this.showError("City name must be at least 2 characters long.");
    return;
  }

  // Call getWeather method
  this.getWeather(city);

  // Clear input (optional)
  this.cityInput.value = "";
};
WeatherApp.prototype.getWeather = async function (city) {
  // Show loading state
  this.showLoading();

  // Disable search button
  this.searchBtn.disabled = true;
  this.searchBtn.textContent = "Searching...";

  // Build API URL
  const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

  try {
    // Make API call
    const response = await axios.get(url);

    // Call displayWeather with data
    this.displayWeather(response.data);
  } catch (error) {
    console.error("Error:", error);

    // Handle specific errors
    if (error.response && error.response.status === 404) {
      this.showError("City not found. Please check the spelling.");
    } else {
      this.showError("Something went wrong. Please try again later.");
    }
  } finally {
    // Re-enable search button
    this.searchBtn.disabled = false;
    this.searchBtn.textContent = "Search";
  }
};
WeatherApp.prototype.displayWeather = function (data) {
  // Extract data from response
  const cityName = data.name;
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Create weather HTML
  const weatherHTML = `
        <div class="weather-info">
            <h2 class="city-name">${cityName}</h2>
            
            <img 
                src="${iconUrl}" 
                alt="${description}" 
                class="weather-icon"
            />
            
            <h1 class="temperature">${temperature}°C</h1>
            
            <p class="description">
                ${description.charAt(0).toUpperCase() + description.slice(1)}
            </p>
        </div>
    `;

  // Display in weather display area
  this.weatherDisplay.innerHTML = weatherHTML;

  // Focus back on input for next search
  this.cityInput.focus();
};
WeatherApp.prototype.showLoading = function () {
  const loadingHTML = `
        <div class="loading-container">
            <div class="spinner"></div>
            <p>Fetching weather data...</p>
        </div>
    `;

  // Display loading state
  this.weatherDisplay.innerHTML = loadingHTML;
};
WeatherApp.prototype.showError = function (message) {
  const errorHTML = `
        <div class="error-message">
            <div class="error-icon">⚠️</div>
            <h2>Oops! Something went wrong</h2>
            <p>${message}</p>
        </div>
    `;

  // Display error
  this.weatherDisplay.innerHTML = errorHTML;

  // Focus back on input for correction
  this.cityInput.focus();
};
WeatherApp.prototype.getForecast = async function (city) {
  // Build forecast API URL
  const url = `${this.forecastUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

  try {
    // Fetch forecast data
    const response = await axios.get(url);

    // Return the data
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);

    // Throw error to be caught by caller
    throw error;
  }
};
WeatherApp.prototype.getWeather = async function (city) {
  // Show loading state
  this.showLoading();

  // Disable search button
  this.searchBtn.disabled = true;
  this.searchBtn.textContent = "Searching...";

  // Build current weather API URL
  const currentWeatherUrl = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

  try {
    // Fetch current weather and forecast simultaneously
    const [currentWeather, forecastData] = await Promise.all([
      axios.get(currentWeatherUrl),
      this.getForecast(city),
    ]);

    // Display current weather
    this.displayWeather(currentWeather.data);

    // Display forecast
    this.displayForecast(forecastData);
  } catch (error) {
    console.error("Error:", error);

    // Handle errors
    if (error.response && error.response.status === 404) {
      this.showError("City not found. Please check spelling.");
    } else {
      this.showError("Something went wrong. Please try again.");
    }
  } finally {
    // Re-enable search button
    this.searchBtn.disabled = false;
    this.searchBtn.textContent = "Search";
  }
};
WeatherApp.prototype.processForecastData = function (data) {
  // Filter forecast list to get one entry per day at 12:00:00
  const dailyForecasts = data.list.filter(function (item) {
    return item.dt_txt.includes("12:00:00");
  });

  // Take only first 5 days
  return dailyForecasts.slice(0, 5);
};
WeatherApp.prototype.displayForecast = function (data) {
  // Process the forecast data
  const dailyForecasts = this.processForecastData(data);

  // Map through forecasts and create HTML for each day
  const forecastHTML = dailyForecasts
    .map(function (day) {
      // Extract data
      const date = new Date(day.dt * 1000);
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
      const temp = Math.round(day.main.temp);
      const description = day.weather[0].description;
      const icon = day.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      // Return forecast card HTML
      return `
            <div class="forecast-card">
                <h4 class="forecast-day">${dayName}</h4>
                <img src="${iconUrl}" alt="${description}" class="forecast-icon"/>
                <p class="forecast-temp">${temp}°C</p>
                <p class="forecast-desc">${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            </div>
        `;
    })
    .join("");

  // Create forecast section HTML
  const forecastSection = `
        <div class="forecast-section">
            <h3 class="forecast-title">5-Day Forecast</h3>
            <div class="forecast-container">
                ${forecastHTML}
            </div>
        </div>
    `;

  // Append to weather display (don't replace current weather!)
  this.weatherDisplay.innerHTML += forecastSection;
};

function WeatherApp(apiKey) {
  this.apiKey = apiKey;
  this.apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  this.forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";

  // Existing DOM references
  this.searchBtn = document.getElementById("search-btn");
  this.cityInput = document.getElementById("city-input");
  this.weatherDisplay = document.getElementById("weather-display");

  // New DOM references
  this.recentSearchesSection = document.getElementById(
    "recent-searches-section",
  );
  this.recentSearchesContainer = document.getElementById(
    "recent-searches-container",
  );

  // Initialize recent searches array (load from localStorage if available)
  this.recentSearches =
    JSON.parse(localStorage.getItem("recentSearches")) || [];

  // Maximum number of recent searches to save
  this.maxRecentSearches = 5;

  this.init();
}
WeatherApp.prototype.loadRecentSearches = function () {
  // Get recent searches from localStorage
  const saved = localStorage.getItem("recentSearches");

  // If data exists, parse it and store in this.recentSearches
  if (saved) {
    this.recentSearches = JSON.parse(saved);
  }

  // Display the recent searches
  this.displayRecentSearches();
};
WeatherApp.prototype.saveRecentSearch = function (city) {
  // Convert city to title case for consistency
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

  // Check if city already exists in array
  // Remove it if it does (we'll add it to the front)
  const index = this.recentSearches.indexOf(cityName);
  if (index > -1) {
    this.recentSearches.splice(index, 1);
  }

  // Add city to the beginning of array
  this.recentSearches.unshift(cityName);

  // Keep only the last 5 searches
  if (this.recentSearches.length > this.maxRecentSearches) {
    this.recentSearches.pop(); // Remove last item
  }

  // Save to localStorage
  localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches));

  // Update display
  this.displayRecentSearches();
};
WeatherApp.prototype.displayRecentSearches = function () {
  // Clear existing buttons
  this.recentSearchesContainer.innerHTML = "";

  // If no recent searches, hide the section
  if (this.recentSearches.length === 0) {
    this.recentSearchesSection.style.display = "none";
    return;
  }

  // Show the section
  this.recentSearchesSection.style.display = "block";

  // Create a button for each recent search
  this.recentSearches.forEach(
    function (city) {
      const btn = document.createElement("button");
      btn.className = "recent-search-btn";
      btn.textContent = city;

      // Add click handler (bind this to maintain context)
      btn.addEventListener(
        "click",
        function () {
          this.cityInput.value = city;
          this.getWeather(city);
        }.bind(this),
      );

      this.recentSearchesContainer.appendChild(btn);
    }.bind(this),
  );
};
WeatherApp.prototype.getWeather = async function (city) {
  this.showLoading();
  this.searchBtn.disabled = true;
  this.searchBtn.textContent = "Searching...";

  const currentUrl = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

  try {
    const [currentWeather, forecastData] = await Promise.all([
      axios.get(currentUrl),
      this.getForecast(city),
    ]);

    this.displayWeather(currentWeather.data);
    this.displayForecast(forecastData);

    // Save this successful search to recent searches
    this.saveRecentSearch(city);

    // Save as last searched city
    localStorage.setItem("lastCity", city);
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.status === 404) {
      this.showError("City not found. Please check spelling and try again.");
    } else {
      this.showError("Something went wrong. Please try again later.");
    }
  } finally {
    this.searchBtn.disabled = false;
    this.searchBtn.textContent = "Search";
  }
};
WeatherApp.prototype.init = function () {
  // Existing event listeners
  this.searchBtn.addEventListener("click", this.handleSearch.bind(this));

  this.cityInput.addEventListener(
    "keypress",
    function (e) {
      if (e.key === "Enter") {
        this.handleSearch();
      }
    }.bind(this),
  );

  // Load recent searches from localStorage
  this.loadRecentSearches();

  // Load last searched city
  this.loadLastCity();
};
