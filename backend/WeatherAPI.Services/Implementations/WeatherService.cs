using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using WeatherAPI.Models;
using WeatherAPI.Services.Interfaces;
using static System.Net.WebRequestMethods;

namespace WeatherAPI.Services.Implementations
{
    public class WeatherService : IWeatherService
    {
        static HttpClient client = new HttpClient();
        string baseURL = @"https://api.openweathermap.org/data/3.0/onecall?";
        string APIKey = "627e5d846e11fe2b6af4446174581998"; // Should be placed in a file that is gitignored, as all sensitive data
        string latitude;
        string longitude;

        async Task<string> IWeatherService.GetCurrentWeather(Coordinates coordinates)
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat={coordinates.Latitude}&lon={coordinates.Longitude}&exclude=minutely,hourly,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;

        }

        async Task<string> IWeatherService.GetOneHourForecast(Coordinates coordinates)
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat={coordinates.Latitude}&lon={coordinates.Longitude}&exclude=current,hourly,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        async Task<string> IWeatherService.GetTwoDayForecast(Coordinates coordinates)
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat={coordinates.Latitude}&lon={coordinates.Longitude}&exclude=current,minutely,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        async Task<string> IWeatherService.GetSevenDayForecast(Coordinates coordinates)
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat={coordinates.Latitude}&lon={coordinates.Longitude}&exclude=current,minutely,hourly,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        
    }
}
