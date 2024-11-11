# # views.py
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated, IsAdminUser
# from rest_framework.views import APIView
# from .models import Pet
# from .serializers import PetSerializer
# from django.shortcuts import get_object_or_404


# class PetListCreateView(APIView):
#     def get(self, request):
#         pets = Pet.objects.all()
#         serializer = PetSerializer(pets, many=True)
#         return Response({"message": "All pets fetched!", "data": serializer.data}, status=status.HTTP_200_OK)

#     def post(self, request):
#         serializer = PetSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(publisher=request.user)
#             return Response({"message": "Pet created successfully!", "data": serializer.data}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class PetDetailView(APIView):
#     def get(self, request, id):
#         pet = get_object_or_404(Pet, pk=id)
#         serializer = PetSerializer(pet)
#         return Response({"message": "Pet fetched successfully!", "data": serializer.data}, status=status.HTTP_200_OK)

#     def patch(self, request, id):
#         pet = get_object_or_404(Pet, pk=id)
#         serializer = PetSerializer(pet, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "Pet updated successfully!", "data": serializer.data}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
