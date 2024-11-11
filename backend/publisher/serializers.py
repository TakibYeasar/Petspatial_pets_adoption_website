# from rest_framework import serializers
# from .models import Publisher, User


# class PublisherSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField()

#     class Meta:
#         model = Publisher
#         fields = ['id', 'first_name', 'last_name',
#                   'user', 'is_deleted', 'created_at']
#         read_only_fields = ['created_at']


# class PublisherUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Publisher
#         fields = ['first_name', 'last_name']
