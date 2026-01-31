
using Microsoft.AspNetCore.Mvc;

namespace BuggyApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetData()
        {
            string result = "sample data";

                if (!string.IsNullOrEmpty(result))
                     {
                        return Ok(new { message = "Data fetched" });
                     }

          return BadRequest("No data");
        }
    }
}
