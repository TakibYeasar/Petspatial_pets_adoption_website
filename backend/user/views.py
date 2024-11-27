from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from pets.models import Pet
from pets.serializers import PetSerializer
from .models import Adopter, Publisher
from .serializers import AdopterSerializer, PublisherSerializer
from authapi.models import CustomUser
from rest_framework.exceptions import NotFound


class UserProfileView(APIView):
    """
    View to retrieve the authenticated user's profile.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        if user.role == "adopter":
            try:
                adopter = Adopter.objects.get(user=user)
                serializer = AdopterSerializer(adopter)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Adopter.DoesNotExist:
                raise NotFound({"detail": "Adopter profile not found."})

        elif user.role == "publisher":
            try:
                publisher = Publisher.objects.get(user=user)
                serializer = PublisherSerializer(publisher)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Publisher.DoesNotExist:
                raise NotFound({"detail": "Publisher profile not found."})

        return Response(
            {"detail": "Invalid user role."},
            status=status.HTTP_400_BAD_REQUEST,
        )


class UserProfileUpdateView(APIView):
    """
    View to update the authenticated user's profile.
    """
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user

        if user.role == "adopter":
            try:
                adopter = Adopter.objects.get(user=user)
                serializer = AdopterSerializer(
                    adopter, data=request.data, partial=True
                )
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Adopter.DoesNotExist:
                raise NotFound({"detail": "Adopter profile not found."})

        elif user.role == "publisher":
            try:
                publisher = Publisher.objects.get(user=user)
                serializer = PublisherSerializer(
                    publisher, data=request.data, partial=True
                )
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Publisher.DoesNotExist:
                raise NotFound({"detail": "Publisher profile not found."})

        return Response(
            {"detail": "Invalid user role."}, status=status.HTTP_400_BAD_REQUEST
        )

class AdoptedPetsListView(APIView):
    """
    View to list all pets adopted by the authenticated adopter.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role != "adopter":
            return Response(
                {"detail": "You are not authorized to view this information."},
                status=status.HTTP_403_FORBIDDEN,
            )

        adopted_pets = Pet.objects.filter(is_adopted=True, adopter__user=user)
        serializer = PetSerializer(adopted_pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PublishedPetsListView(APIView):
    """
    View to list all pets published by the authenticated publisher.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role != "publisher":
            return Response(
                {"detail": "You are not authorized to view this information."},
                status=status.HTTP_403_FORBIDDEN,
            )

        published_pets = Pet.objects.filter(publisher__user=user)
        serializer = PetSerializer(published_pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AdopterAdoptionRequestsView(APIView):
    """
    View to list all adoption requests made by the authenticated adopter.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role != "adopter":
            return Response(
                {"detail": "You are not authorized to view this information."},
                status=status.HTTP_403_FORBIDDEN,
            )

        adopter = Adopter.objects.filter(user=user)
        adoption_requests = adopter.adoption_requests.all()
        serializer = PetSerializer(adoption_requests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PublisherAdoptionRequestsView(APIView):
    """
    View to list all pending adoption requests for the authenticated publisher.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role != "publisher":
            return Response(
                {"detail": "You are not authorized to view this information."},
                status=status.HTTP_403_FORBIDDEN,
            )

        adoption_requests = Pet.objects.filter(
            publisher__user=user, adopt_status="PENDING"
        )
        serializer = PetSerializer(adoption_requests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PendingPublishingRequestsView(APIView):
    """
    View to list all pending publishing requests for pets.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role != "admin":
            return Response(
                {"detail": "Only admins can view this information."},
                status=status.HTTP_403_FORBIDDEN,
            )

        pending_pets = Pet.objects.filter(is_approved=False)
        serializer = PetSerializer(pending_pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
