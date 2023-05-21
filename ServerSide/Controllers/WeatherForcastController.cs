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

		[HttpGet("VerifyUser")]
		public bool GetUser([FromQuery] UserNamePasswordModel userPassword)
		{
			Console.WriteLine("Verifying User");
			Console.WriteLine($"{userPassword.UserName} | {userPassword.Password}");
			return Cluster0.VerifyUser(userPassword);
		}

		[HttpGet("AddUser")]
		public ErrorLogModel AddUser([FromQuery]UserModel user)
		{
			Console.WriteLine("Adding User");
			var responce = Cluster0.AddUser(user);

			if (responce == "ok")
			{
				return new ErrorLogModel { Successful = true, Error = null };
			}
			else
			{
				return new ErrorLogModel { Successful = false, Error = responce };
			}

		}
	}
}