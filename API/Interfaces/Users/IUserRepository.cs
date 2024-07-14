using API.Models.Users;

namespace API.Interfaces.Users;

public interface IUserRepository
{
    public Task<IEnumerable<User>> GetUsersAsync();
    public Task<User?> GetUserByIdAsync(int id);
}
