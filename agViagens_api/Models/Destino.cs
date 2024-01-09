using System.ComponentModel.DataAnnotations;
using agViagens_api.Models;  


namespace agViagens_api.Models
{
    public class Destino
        
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? NomeDoDestino { get; set; }

        [Required]
        public string? IdPassagem { get; set; }
    }
}
