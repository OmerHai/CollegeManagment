using Moq;
using Xunit;
using API.Models.Users;
using API.Data;
using API.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace API.Tests.Repositories;

public class UserRepositoryTests
{
    private readonly DataContext _context;
    private readonly UserRepository _userRepository;

    public UserRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: "UserRepositoryTest")
            .Options;

        _context = new DataContext(options);
        _userRepository = new UserRepository(_context);
    }

    [Fact]
    public async Task GetUsersAsync_ReturnsAllUsers()
    {
        // Arrange
        _context.Users.AddRange(new List<User> {
            new User { UserName = "user1", Email = "user1@example.com", Password = "password1" },
            new User { UserName = "user2", Email = "user2@example.com", Password = "password2" }
        });
        await _context.SaveChangesAsync();

        // Act
        var users = await _userRepository.GetUsersAsync();

        // Assert
        Assert.Equal(2, users.Count());
    }

        [Fact]
    public async Task GetUserById_ReturnsCorrectUser()
    {
        // Arrange
        var user = new User { UserName = "user1", Email = "user1@example.com", Password = "password1" };
        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        // Act
        var retrievedUser  = await _userRepository.GetUserByIdAsync(user.Id);

        // Assert
        Assert.Equal(user.UserName, retrievedUser.UserName);
    }
}