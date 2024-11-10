from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Publisher, User
from .serializers import PublisherSerializer, PublisherUpdateSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAdminOrPublisher


class PublisherListView(APIView):
    def get(self, request):
        search_term = request.query_params.get('searchTerm', '')
        queryset = Publisher.objects.filter(
            Q(first_name__icontains=search_term) |
            Q(last_name__icontains=search_term) |
            Q(user__email__icontains=search_term),
            is_deleted=False
        )
        serializer = PublisherSerializer(queryset, many=True)
        return Response({'success': True, 'message': 'All Publishers fetched!', 'data': serializer.data}, status=status.HTTP_200_OK)


class PublisherDetailView(APIView):
    permission_classes = [IsAuthenticated, IsAdminOrPublisher]

    def get(self, request, pk):
        publisher = get_object_or_404(Publisher, pk=pk, is_deleted=False)
        if publisher.user.status != 'ACTIVE':
            return Response({'error': 'This user is blocked or deleted by admin!'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = PublisherSerializer(publisher)
        return Response({'success': True, 'message': 'Publisher fetched successfully!', 'data': serializer.data}, status=status.HTTP_200_OK)

    def patch(self, request, pk):
        publisher = get_object_or_404(Publisher, pk=pk, is_deleted=False)
        serializer = PublisherUpdateSerializer(
            publisher, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'message': 'Publisher data updated successfully!', 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        publisher = get_object_or_404(Publisher, pk=pk)
        publisher.is_deleted = True
        publisher.user.status = 'DELETED'
        publisher.user.save()
        publisher.save()
        return Response({'success': True, 'message': 'Publisher soft deleted successfully!'}, status=status.HTTP_200_OK)


class PublisherHardDeleteView(APIView):
    permission_classes = [IsAuthenticated, IsAdminOrPublisher]

    def delete(self, request, pk):
        publisher = get_object_or_404(Publisher, pk=pk)
        publisher.user.delete()  # Deletes associated user
        publisher.delete()
        return Response({'success': True, 'message': 'Publisher deleted successfully!'}, status=status.HTTP_200_OK)
