using API.Interfaces.Users;
using API.Models.Users;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Users;

public class UsersController(IUserRepository userRepository) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return Ok(await userRepository.GetUsersAsync());
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await userRepository.GetUserByIdAsync(id);
        if (user == null)
            return NotFound();
        return Ok(user);
    }
}
