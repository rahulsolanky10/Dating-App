using System;
using DatingApp.API.Models;

namespace DatingApp.API.Dtos
{
    public class MessageToReturnDto
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public string SenderKnownsAs { get; set; }
        public string SenderPhotoUrl { get; set; }
       // public User Sender { get; set; }
        public int RecipientId { get; set; }
        public string RecipientKnownsAs { get; set; }
         public string RecipientPhotoUrl { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; }
        // public bool SenderDeleted { get; set; }
        // public bool RecipientDeleted { get; set; }
    }
}