# # adopters/serializers.py
# from rest_framework import serializers
# from .models import Adopter, User


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['email', 'status']


# class AdopterSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)

#     class Meta:
#         model = Adopter
#         fields = [
#             'id', 'first_name', 'last_name', 'email', 'contact_number', 'address',
#             'is_deleted', 'user', 'created_at'
#         ]


# class UpdateAdopterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Adopter
#         fields = ['first_name', 'last_name', 'contact_number', 'address']
