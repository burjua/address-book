using AddressBook.Core;
using AddressBook.Core.Repositories;
using AddressBook.Data;
using AddressBook.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AddressBook.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(); // Enabling Cors

            services.AddControllers();

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddTransient<IContactsService, ContactsService>();

            services.AddAutoMapper(typeof(Startup));

            services.AddDbContext<ContactsDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ContactsDbContext"), x => x.MigrationsAssembly("AddressBook.Data")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            // Enabling Cors for default angular dev url
            // This is for demo/testing purposes only
            app.UseCors(
                options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
            );

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
