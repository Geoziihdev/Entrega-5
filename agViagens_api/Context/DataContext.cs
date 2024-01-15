using Microsoft.EntityFrameworkCore;
using agViagens_api.Models;

namespace agViagens_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Passagem> Passagens { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configurar para utf8mb4
            modelBuilder.UseCollation("utf8mb4_general_ci");

            // Configuração do tamanho máximo para colunas específicas
            modelBuilder.Entity<Cliente>()
                .Property(c => c.Nome)
                .HasColumnType("LONGTEXT");

            

            // Adicione outras configurações de modelo, se necessário
        }
    }
}

