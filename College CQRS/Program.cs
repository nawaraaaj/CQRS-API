using System;
using CollegeCQRS.Infrastructure;
using CollegeCQRS.Core;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using MediatR;
using CollegeCQRS.Application.Features.Students.Commands.CreateStudent;
using CollegeCQRS.Core.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

//mysql and dbcontext  
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});
// mediater library 
builder.Services.AddMediatR(typeof(CreateStudentCommandHandler).Assembly);

//repository 
builder.Services.AddScoped<IStudentRepository, StudentRepository>();

//enable cors
//this allows the frontend to make connections to the backend without any issues.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:52877")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngular");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
