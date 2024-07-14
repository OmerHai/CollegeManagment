using System.ComponentModel.DataAnnotations;

namespace API.Models.Users;

public class User
{
    public int Id { get; set; }

    [MaxLength(100)]
    public required string UserName { get; set; }

    [EmailAddress]
    public required string Email { get; set; }

    public required string Password { get; set;}
}
