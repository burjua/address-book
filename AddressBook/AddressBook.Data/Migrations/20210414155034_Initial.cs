using Microsoft.EntityFrameworkCore.Migrations;

namespace AddressBook.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Surname = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Dob = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Dob", "Email", "FirstName", "Surname" },
                values: new object[,]
                {
                    { 1, "1900-01-01", "superman@dccomics.com", "Clark", "Kent" },
                    { 2, "1900-01-01", "batman@dccomics.com", "Bruce", "Wayne" },
                    { 3, "1900-01-01", "wonder.woman@dccomics.com", "Diana", "Prince" },
                    { 4, "1900-01-01", "ironman@marvel.com", "Tony", "Stark" },
                    { 5, "1900-01-01", "spiderman@marvel.com", "Peter", "Parker" },
                    { 6, "1900-01-01", "hulk@marvel.com", "Bruce", "Banner" },
                    { 7, "1900-01-01", "captain.america@marvel.com", "Steve", "Rogers" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_Email",
                table: "Contacts",
                column: "Email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
