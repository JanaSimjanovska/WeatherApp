using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using WeatherAPI.Services.Interfaces;

namespace WeatherAPI.Services.Implementations
{
    public class WeatherService : IWeatherService
    {
        static HttpClient client = new HttpClient();
        string baseURL = @"https://api.openweathermap.org/data/3.0/onecall?";
        string APIKey = "627e5d846e11fe2b6af4446174581998";
        string latitude;
        string longitude;
        string geocodingAPIURL = @"";

        async Task<string> IWeatherService.GetCoordinates(string location)
        {
            using HttpResponseMessage response = await client.GetAsync($"{geocodingAPIURL}lat=88&lon=44.3&exclude=minutely,hourly,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;

        }

        async Task<string> IWeatherService.GetCurrentWeather()
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat=88&lon=44.3&exclude=minutely,hourly,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;

        }

        async Task<string> IWeatherService.GetOneHourForecast()
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat=88&lon=44.3&exclude=current,hourly,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        async Task<string> IWeatherService.GetTwoDayForecast()
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat=88&lon=44.3&exclude=current,minutely,daily,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        async Task<string> IWeatherService.GetSevenDayForecast()
        {
            using HttpResponseMessage response = await client.GetAsync($"{baseURL}lat=88&lon=44.3&exclude=current,minutely,hourly,alerts&appid={APIKey}");
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();

            return responseBody;
        }

        
    }
}
