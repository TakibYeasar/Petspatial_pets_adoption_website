from django.contrib import admin

from .models import (
    Adopter,
    Publisher,
)

admin.site.register([
    Adopter,
    Publisher,
])
