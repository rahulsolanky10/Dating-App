using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
         [Required(ErrorMessage ="UserName is required")]
        // [StringLength(20, MinimumLength = 4, ErrorMessage = "Min Password length should be 4")]
        public string Username { get; set; }
         [Required(ErrorMessage = "Password is required")]
        // [StringLength(20, MinimumLength =4, ErrorMessage ="Min Password length should be 4")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string KnownsAs { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }

    }
}