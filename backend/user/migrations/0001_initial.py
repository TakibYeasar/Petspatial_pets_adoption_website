# Generated by Django 5.1.2 on 2024-11-20 08:24

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Adopter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50, verbose_name='First Name')),
                ('last_name', models.CharField(max_length=50, verbose_name='Last Name')),
                ('profile_photo', models.ImageField(blank=True, null=True, upload_to='adopter_photos/', verbose_name='Profile Photo')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Email Address')),
                ('contact_number', models.CharField(blank=True, max_length=15, null=True, verbose_name='Contact Number')),
                ('address', models.CharField(blank=True, max_length=255, null=True, verbose_name='Address')),
                ('city', models.CharField(blank=True, max_length=100, null=True, verbose_name='City')),
                ('state', models.CharField(blank=True, max_length=100, null=True, verbose_name='State')),
                ('zip_code', models.CharField(blank=True, max_length=10, null=True, verbose_name='ZIP Code')),
                ('bio', models.TextField(blank=True, max_length=500, null=True, verbose_name='Short Bio')),
                ('preferred_pet_types', models.JSONField(blank=True, null=True, verbose_name='Preferred Pet Types (JSON)')),
                ('adoption_goal', models.TextField(blank=True, max_length=500, null=True, verbose_name='Adoption Goal')),
                ('social_media_links', models.JSONField(blank=True, null=True, verbose_name='Social Media Links (JSON)')),
                ('is_verified', models.BooleanField(default=False, verbose_name='Verified')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='Deleted')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='adopter', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Adopter',
                'verbose_name_plural': 'Adopters',
            },
        ),
        migrations.CreateModel(
            name='Publisher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50, verbose_name='First Name')),
                ('last_name', models.CharField(max_length=50, verbose_name='Last Name')),
                ('profile_photo', models.ImageField(blank=True, null=True, upload_to='publisher_photos/', verbose_name='Profile Photo')),
                ('contact_number', models.CharField(blank=True, max_length=15, null=True, verbose_name='Contact Number')),
                ('address', models.TextField(blank=True, null=True, verbose_name='Address')),
                ('city', models.CharField(max_length=100, verbose_name='City')),
                ('state', models.CharField(blank=True, max_length=100, null=True, verbose_name='State')),
                ('zip_code', models.CharField(blank=True, max_length=10, null=True, verbose_name='ZIP Code')),
                ('bio', models.TextField(blank=True, max_length=500, null=True, verbose_name='Bio')),
                ('website_url', models.URLField(blank=True, null=True, verbose_name='Website URL')),
                ('social_media_links', models.JSONField(blank=True, null=True, verbose_name='Social Media Links (JSON)')),
                ('is_verified', models.BooleanField(default=False, verbose_name='Verified')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='Deleted')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='publisher', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Publisher',
                'verbose_name_plural': 'Publishers',
            },
        ),
    ]