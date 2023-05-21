using Microsoft.AspNetCore.Mvc;
using ServerSide.Models;
using ServerSide.MongoDB;

namespace ServerSide.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherForecastController : ControllerBase
	{
		private readonly ILogger<WeatherForecastController> _logger;


		public WeatherForecastController(ILogger<WeatherForecastController> logger)
		{
			_logger = logger;
		}



		[HttpGet("getUser")]
		public UserModel Get()
		{
			Console.WriteLine("GET");
			return new UserModel
			{
				FirstName = "",
				LastName = "",
				Email = "",
				Password = "",
			};
			//.ToArray();
		}

		[HttpPost("PostUser")]
		public void Post(UserModel user)
		{
			Console.WriteLine("POST");
			Cluster0.AddUser(user);
		}
	}
}