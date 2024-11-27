from rest_framework import serializers
from .models import Adopter, Publisher


class AdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adopter
        fields = "__all__"


class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = "__all__"

