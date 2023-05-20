using Microsoft.AspNetCore.Mvc;
using ServerSide.Models;
using ServerSide.MongoDB;

namespace ServerSide.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Controller : ControllerBase
    {
        private readonly ILogger<Controller> _logger;

        public Controller(ILogger<Controller> logger)
        {
            _logger = logger;
        }

        [HttpGet("1")]
        public UserModel Get()
        {
            return new UserModel();
        }

        [HttpPost("PostUser")]
        public void Post(UserModel user)
        {
            Cluster0.AddUser(user);


        }


       
    }
}