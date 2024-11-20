from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings


class Adopter(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="adopter"
    )
    first_name = models.CharField(_("First Name"), max_length=50)
    last_name = models.CharField(_("Last Name"), max_length=50)
    profile_photo = models.ImageField(
        _("Profile Photo"), upload_to='adopter_photos/', blank=True, null=True
    )
    email = models.EmailField(_("Email Address"), unique=True)
    contact_number = models.CharField(
        _("Contact Number"), max_length=15, blank=True, null=True)
    address = models.CharField(
        _("Address"), max_length=255, blank=True, null=True)
    city = models.CharField(_("City"), max_length=100, blank=True, null=True)
    state = models.CharField(_("State"), max_length=100, blank=True, null=True)
    zip_code = models.CharField(
        _("ZIP Code"), max_length=10, blank=True, null=True)
    bio = models.TextField(
        _("Short Bio"), max_length=500, blank=True, null=True
    )
    preferred_pet_types = models.JSONField(
        _("Preferred Pet Types (JSON)"), blank=True, null=True
    )
    adoption_goal = models.TextField(
        _("Adoption Goal"), max_length=500, blank=True, null=True
    )
    social_media_links = models.JSONField(
        _("Social Media Links (JSON)"), blank=True, null=True
    )
    is_verified = models.BooleanField(_("Verified"), default=False)
    is_deleted = models.BooleanField(_("Deleted"), default=False)
    created_at = models.DateTimeField(_("Created At"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Updated At"), auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = _("Adopter")
        verbose_name_plural = _("Adopters")


class Publisher(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='publisher'
    )
    first_name = models.CharField(_("First Name"), max_length=50)
    last_name = models.CharField(_("Last Name"), max_length=50)
    profile_photo = models.ImageField(
        _("Profile Photo"), upload_to='publisher_photos/', blank=True, null=True
    )
    contact_number = models.CharField(
        _("Contact Number"), max_length=15, blank=True, null=True)
    address = models.TextField(_("Address"), blank=True, null=True)
    city = models.CharField(_("City"), max_length=100)
    state = models.CharField(_("State"), max_length=100, blank=True, null=True)
    zip_code = models.CharField(
        _("ZIP Code"), max_length=10, blank=True, null=True)
    bio = models.TextField(
        _("Bio"), max_length=500, blank=True, null=True
    )
    website_url = models.URLField(_("Website URL"), blank=True, null=True)
    social_media_links = models.JSONField(
        _("Social Media Links (JSON)"), blank=True, null=True
    )
    is_verified = models.BooleanField(_("Verified"), default=False)
    is_deleted = models.BooleanField(_("Deleted"), default=False)
    created_at = models.DateTimeField(_("Created At"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Updated At"), auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = _("Publisher")
        verbose_name_plural = _("Publishers")
