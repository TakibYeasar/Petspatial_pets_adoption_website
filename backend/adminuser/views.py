# # views.py
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from django.shortcuts import get_object_or_404
# from .models import Admin
# from .serializers import AdminSerializer
# from django.db import transaction
# from rest_framework.permissions import IsAdminUser


# class AdminListView(APIView):
#     permission_classes = [IsAdminUser]

#     def get(self, request):
#         search_term = request.query_params.get('searchTerm')
#         admins = Admin.objects.filter(is_deleted=False)

#         # Filter by search term
#         if search_term:
#             admins = admins.filter(
#                 models.Q(first_name__icontains=search_term) |
#                 models.Q(last_name__icontains=search_term) |
#                 models.Q(email__icontains=search_term) |
#                 models.Q(contact_number__icontains=search_term)
#             )

#         serializer = AdminSerializer(admins, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)


# class AdminDetailView(APIView):
#     permission_classes = [IsAdminUser]

#     def get(self, request, pk):
#         admin = get_object_or_404(Admin, pk=pk, is_deleted=False)
#         serializer = AdminSerializer(admin)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     def patch(self, request, pk):
#         admin = get_object_or_404(Admin, pk=pk, is_deleted=False)
#         serializer = AdminSerializer(admin, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk):
#         admin = get_object_or_404(Admin, pk=pk, is_deleted=False)
#         with transaction.atomic():
#             admin.user.delete()
#             admin.delete()
#         return Response({"message": "Admin deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)


# class AdminSoftDeleteView(APIView):
#     permission_classes = [IsAdminUser]

#     def delete(self, request, pk):
#         admin = get_object_or_404(Admin, pk=pk, is_deleted=False)
#         with transaction.atomic():
#             admin.is_deleted = True
#             admin.save(update_fields=['is_deleted'])
#             admin.user.is_active = False
#             admin.user.save(update_fields=['is_active'])
#         return Response({"message": "Admin soft-deleted successfully!"}, status=status.HTTP_204_NO_CONTENT)
