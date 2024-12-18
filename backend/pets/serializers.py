from rest_framework import serializers
from .models import Pet


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'
        read_only_fields = ['is_adopted', 'is_booked',
                            'publisher', 'created_at', 'updated_at']
        # depth = 1

    def get_image(self, obj):
        """
        Returns the full URL for the image field if an image is uploaded.
        """
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return None

        

class PetCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ['name', 'image', 'birth_date', 'description', 'gender', 'age', 'breed', 'weight', 'height',
                  'color', 'size', 'health_status', 'special_needs', 'vaccination_status', 'microchip_id',
                  'location', 'adoption_fee', 'adopt_status']

