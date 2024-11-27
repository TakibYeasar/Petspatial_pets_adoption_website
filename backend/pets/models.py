from django.db import models
from django.utils.translation import gettext_lazy as _
from datetime import date
from django.conf import settings


class Gender(models.TextChoices):
    MALE = "MALE", _("Male")
    FEMALE = "FEMALE", _("Female")
    UNKNOWN = "UNKNOWN", _("Unknown")


class HealthStatus(models.TextChoices):
    HEALTHY = "HEALTHY", _("Healthy")
    ILL = "ILL", _("Ill")
    IN_RECOVERY = "IN_RECOVERY", _("In Recovery")
    SPECIAL_CARE = "SPECIAL_CARE", _("Requires Special Care")


class PetSize(models.TextChoices):
    SMALL = "SMALL", _("Small")
    MEDIUM = "MEDIUM", _("Medium")
    LARGE = "LARGE", _("Large")


class PetAdoptStatus(models.TextChoices):
    AVAILABLE = "AVAILABLE", _("Available")
    BOOKED = "BOOKED", _("Booked")
    ADOPTED = "ADOPTED", _("Adopted")
    UNAVAILABLE = "UNAVAILABLE", _("Unavailable")


class VaccinationStatus(models.TextChoices):
    UP_TO_DATE = "UP_TO_DATE", _("Up to Date")
    PARTIAL = "PARTIAL", _("Partial")
    NOT_VACCINATED = "NOT_VACCINATED", _("Not Vaccinated")


class Pet(models.Model):
    id = models.BigAutoField(primary_key=True, editable=False)
    publisher = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="published_pets")
    name = models.CharField(_("Name"), max_length=255)
    image = models.ImageField(_("Image URL"), blank=True, null=True)
    birth_date = models.DateField(_("Birth Date"), null=True, blank=True)
    description = models.TextField(_("Description"), null=True, blank=True)
    gender = models.CharField(
        _("Gender"), choices=Gender.choices)
    age = models.PositiveIntegerField(
        _("Age (in years)"), null=True, blank=True)
    breed = models.CharField(_("Breed"), max_length=255, null=True, blank=True)
    weight = models.FloatField(_("Weight (kg)"), null=True, blank=True)
    height = models.FloatField(_("Height (cm)"), null=True, blank=True)
    color = models.CharField(_("Color"), max_length=255, null=True, blank=True)
    size = models.CharField(_("Size"), max_length=6, choices=PetSize.choices)
    health_status = models.CharField(
        _("Health Status"), choices=HealthStatus.choices, default=HealthStatus.HEALTHY
    )
    special_needs = models.TextField(_("Special Needs"), null=True, blank=True)
    vaccination_status = models.CharField(
        _("Vaccination Status"), choices=VaccinationStatus.choices, default=VaccinationStatus.NOT_VACCINATED
    )
    microchip_id = models.CharField(
        _("Microchip ID"), max_length=50, unique=True, null=True, blank=True
    )
    location = models.CharField(
        _("Location"), max_length=255, null=True, blank=True)
    adoption_fee = models.DecimalField(
        _("Adoption Fee"), max_digits=8, decimal_places=2, null=True, blank=True
    )
    adopt_status = models.CharField(
        _("Adoption Status"), choices=PetAdoptStatus.choices, default=PetAdoptStatus.AVAILABLE
    )
    is_adopted = models.BooleanField(_("Is Adopted"), default=False)
    is_booked = models.BooleanField(_("Is Booked"), default=False)
    is_approved = models.BooleanField(_("Is Approved"), default=False)
    created_at = models.DateTimeField(_("Created At"), auto_now_add=True)
    updated_at = models.DateTimeField(_("Updated At"), auto_now=True)

    def __str__(self):
        return self.name

    @property
    def calculated_age(self):
        """Calculates age based on birth_date if available."""
        if self.birth_date:
            return date.today().year - self.birth_date.year
        return None

    class Meta:
        verbose_name = _("Pet")
        verbose_name_plural = _("Pets")
        ordering = ['-created_at']


