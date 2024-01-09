using System.ComponentModel.DataAnnotations;
using System;

namespace agViagens_api.Models
{
    public class Cliente
    {
        [Key]
        public int ClienteId { get; set; }

        [Required]
        [MaxLength(255)] // Defina o tamanho máximo adequado
        public string Nome { get; set; }

        [Required]
        [MaxLength(255)] // Defina o tamanho máximo adequado
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(20)] // Defina o tamanho máximo adequado
        public string Telefone { get; set; }

        [Required]
        [MaxLength(255)] // Defina o tamanho máximo adequado
        public string Endereco { get; set; }

        [Required]
        public DateTime DataCadastro { get; set; }

        [Required]
        [MaxLength(255)] // Defina o tamanho máximo adequado
        public string Senha { get; set; }
    }
}
