# adopters/models.py

from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """Custom user model to differentiate roles."""
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('publisher', 'Pet Publisher'),
        ('adopter', 'Pet Adopter'),
    )
    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        default='adopter'
    )


class Adopter(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="adopter"
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_photo = models.ImageField(
        upload_to='adopter_photos/', blank=True, null=True
    )
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    bio = models.TextField(
        _("Short bio about the adopter"), max_length=500, blank=True, null=True
    )
    preferred_pet_types = models.JSONField(
        _("Preferred types of pets (JSON format)"), blank=True, null=True
    )
    adoption_goal = models.TextField(
        _("Reason for adopting a pet"), max_length=500, blank=True, null=True
    )
    social_media_links = models.JSONField(
        _("Social media links (JSON format)"), blank=True, null=True
    )
    is_verified = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

