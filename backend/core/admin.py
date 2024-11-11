from django.contrib import admin
from .models import Pet


@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'breed', 'size',
                    'adopt_status', 'publisher')
    search_fields = ('name', 'breed')
    list_filter = ('size', 'adopt_status', 'health_status')

