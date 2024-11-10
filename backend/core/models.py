# models.py
from django.db import models
from django.contrib.auth.models import User


class Gender(models.TextChoices):
    MALE = "MALE", "Male"
    FEMALE = "FEMALE", "Female"


class HealthStatus(models.TextChoices):
    HEALTHY = "HEALTHY", "Healthy"
    ILL = "ILL", "Ill"


class PetSize(models.TextChoices):
    SMALL = "SMALL", "Small"
    MEDIUM = "MEDIUM", "Medium"
    LARGE = "LARGE", "Large"


class PetAdoptStatus(models.TextChoices):
    AVAILABLE = "AVAILABLE", "Available"
    BOOKED = "BOOKED", "Booked"
    ADOPTED = "ADOPTED", "Adopted"


class Pet(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField()
    birth_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    gender = models.CharField(max_length=6, choices=Gender.choices)
    age = models.PositiveIntegerField()
    breed = models.CharField(max_length=255)
    weight = models.FloatField()
    height = models.FloatField()
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=6, choices=PetSize.choices)
    health_status = models.CharField(
        max_length=10, choices=HealthStatus.choices)
    special_needs = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    publisher = models.ForeignKey(User, on_delete=models.CASCADE)
    is_adopt = models.BooleanField(default=False)
    is_booked = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
