using API.Interfaces.Users;
using API.Models.Users;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public class UserRepository(DataContext context) : IUserRepository
{
    public async Task<User?> GetUserByIdAsync(int id)
    {
       return await context.Users.FindAsync(id);
    }

    public async Task<IEnumerable<User>> GetUsersAsync()
    {
        return await context.Users.ToListAsync();
    }
}
