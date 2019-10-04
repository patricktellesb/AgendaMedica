using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgendaMedicaAPI.Models
{
    public class Consulta
    {
        [Key]
        public int Id_Consulta { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Nome_Paciente { get; set; }
        [Column(TypeName = "Date")]
        [Required]
        public DateTime Dat_Nascimento { get; set; }
        [Column(TypeName = "DateTime")]
        [Required]
        public DateTime Dat_Inicio_Consulta { get; set; }
        [Required]
        [Column(TypeName = "DateTime")]
        public DateTime Dat_Fim_Consulta { get; set; }
        [Column(TypeName = "nvarchar(300)")]
        public string Observacao { get; set; }


    }
}
