using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Sockets;
using WeatherAPI.Models;
using WeatherAPI.Models.Users;
using WeatherAPI.Services.Implementations;
using WeatherAPI.Services.Interfaces;
using WeatherAPI.Shared.Exceptions;

namespace WeatherAPI.Controllers
{
    [Authorize(Roles = "User")]
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {

        private IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpPost("current-weather")]
        async public Task<IActionResult> GeCurrenttWeather([FromBody]Coordinates coordinates)
        {
            string result = await _weatherService.GetCurrentWeather(coordinates);
            
            if(result == null)
            {
                throw new NotFoundException("The requested resource was not found");
            }
            try
            {
                return StatusCode(StatusCodes.Status200OK, result);
            }
            catch (NotFoundException ex)
            {
                return StatusCode(StatusCodes.Status404NotFound, ex);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        [HttpPost("hourly-weather")]

        async public Task<IActionResult> GetOneHourForecast([FromBody]Coordinates coordinates)
        {
            string result = await _weatherService.GetOneHourForecast(coordinates);

            if (result == null)
            {
                throw new NotFoundException("The requested resource was not found");
            }
            try
            {
                return StatusCode(StatusCodes.Status200OK, result);
            }
            catch (NotFoundException ex)
            {
                return StatusCode(StatusCodes.Status404NotFound, ex);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        [HttpPost("two-day-weather")]

        async public Task<IActionResult> GetTwoDayForecast([FromBody]Coordinates coordinates)
        {
            string result = await _weatherService.GetTwoDayForecast(coordinates);

            if (result == null)
            {
                throw new NotFoundException("The requested resource was not found");
            }
            try
            {
                return StatusCode(StatusCodes.Status200OK, result);
            }
            catch (NotFoundException ex)
            {
                return StatusCode(StatusCodes.Status404NotFound, ex);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }

        [HttpPost("seven-day-weather")]

        async public Task<IActionResult> GetSevenDayForecast([FromBody]Coordinates coordinates)
        {
            string result = await _weatherService.GetSevenDayForecast(coordinates);

            if (result == null)
            {
                throw new NotFoundException("The requested resource was not found");
            }
            try
            {
                return StatusCode(StatusCodes.Status200OK, result);
            }
            catch (NotFoundException ex)
            {
                return StatusCode(StatusCodes.Status404NotFound, ex);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex);
            }
        }
    }
}
