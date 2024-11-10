# adopters/views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Adopter, User, UserStatus
from .serializers import AdopterSerializer, UpdateAdopterSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Q


class AdopterListView(APIView):
    def get(self, request):
        search_term = request.query_params.get("searchTerm", "")
        adopters = Adopter.objects.filter(
            Q(first_name__icontains=search_term) |
            Q(last_name__icontains=search_term) |
            Q(email__icontains=search_term) |
            Q(contact_number__icontains=search_term) |
            Q(address__icontains=search_term),
            is_deleted=False
        )
        serializer = AdopterSerializer(adopters, many=True)
        return Response({"success": True, "message": "All Pet Adopter fetched!", "data": serializer.data}, status=status.HTTP_200_OK)


class AdopterDetailView(APIView):
    def get(self, request, id):
        adopter = get_object_or_404(Adopter, id=id, is_deleted=False)
        if adopter.user.status != UserStatus.ACTIVE:
            return Response({"success": False, "message": "This user is blocked or deleted by admin!"}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = AdopterSerializer(adopter)
        return Response({"success": True, "message": "Single Adopter fetched successfully!", "data": serializer.data}, status=status.HTTP_200_OK)

    def patch(self, request, id):
        adopter = get_object_or_404(Adopter, id=id, is_deleted=False)
        if adopter.user.status != UserStatus.ACTIVE:
            return Response({"success": False, "message": "This user is blocked or deleted by admin!"}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = UpdateAdopterSerializer(
            adopter, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True, "message": "Adopter data updated successfully!", "data": serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        adopter = get_object_or_404(Adopter, id=id)
        adopter.delete()
        return Response({"success": True, "message": "Adopter deleted successfully!"}, status=status.HTTP_200_OK)


class AdopterSoftDeleteView(APIView):
    def delete(self, request, id):
        adopter = get_object_or_404(Adopter, id=id, is_deleted=False)
        adopter.is_deleted = True
        adopter.user.status = UserStatus.DELETED
        adopter.save()
        adopter.user.save()
        return Response({"success": True, "message": "Adopter soft deleted successfully!"}, status=status.HTTP_200_OK)
