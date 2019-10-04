using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AgendaMedicaAPI.Migrations
{
    public partial class MeuBanco : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Consultas",
                columns: table => new
                {
                    Id_Consulta = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nome_Paciente = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Dat_Nascimento = table.Column<DateTime>(type: "Date", nullable: false),
                    Dat_Inicio_Consulta = table.Column<DateTime>(type: "DateTime", nullable: false),
                    Dat_Fim_Consulta = table.Column<DateTime>(type: "DateTime", nullable: false),
                    Observacao = table.Column<string>(type: "nvarchar(300)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consultas", x => x.Id_Consulta);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consultas");
        }
    }
}
