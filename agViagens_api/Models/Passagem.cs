using System.ComponentModel.DataAnnotations;
using agViagens_api.Models;  

namespace agViagens_api.Models
{
    public class Passagem
    {
        [Key]
        public int IdPassagem { get; set; }

        [Required]
        public DateTime? DataViagem { get; set; }

        [Required]
        public decimal? preco { get; set; }

        [Required]
        public int? IdCliente { get; set; }

        [Required]
        public int? IdDestino { get; set; }
    }
}
