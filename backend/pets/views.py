from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import Pet
from .serializers import PetSerializer, PetCreateSerializer


class ManagePetsView(APIView):
    """
    View to approve, edit approval status, delete a pet, or get all pets by authenticated admin.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        if request.user.role != 'admin':
            return Response(
                {"detail": "You do not have permission to view pets."},
                status=status.HTTP_403_FORBIDDEN
            )

        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk, *args, **kwargs):
        if request.user.role != 'admin':
            return Response(
                {"detail": "You do not have permission to approve or edit pets."},
                status=status.HTTP_403_FORBIDDEN
            )
            
        try:
            pet = Pet.objects.get(pk=pk)
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found."}, status=status.HTTP_404_NOT_FOUND)

        is_approved = request.data.get("is_approved", None)

        if is_approved is not None:
            pet.is_approved = is_approved
            pet.adopt_status = (
                pet.PetAdoptStatus.AVAILABLE if is_approved else pet.PetAdoptStatus.PENDING
            )
            pet.save()

            status_message = (
                "approved" if is_approved else "set to pending approval"
            )
            return Response(
                {"detail": f"Pet '{pet.name}' has been {status_message}."},
                status=status.HTTP_200_OK,
            )
            
        if pet.is_approved:
            return Response(
                {"detail": f"Pet '{pet.name}' is already approved."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        pet.is_approved = True
        pet.adopt_status = "AVAILABLE"
        pet.save()

        return Response(
            {"detail": f"Pet '{pet.name}' approved successfully."},
            status=status.HTTP_200_OK,
        )

    def delete(self, request, pk, *args, **kwargs):
        if request.user.role != 'admin':
            return Response(
                {"detail": "You do not have permission to delete pets."},
                status=status.HTTP_403_FORBIDDEN
            )

        try:
            pet = Pet.objects.get(pk=pk)
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found."}, status=status.HTTP_404_NOT_FOUND)

        pet.delete()
        return Response(
            {"detail": f"Pet '{pet.name}' has been successfully removed."},
            status=status.HTTP_200_OK,
        )
        

class PetCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        if user.role != 'publisher':
            raise PermissionDenied(
                "You do not have permission to create a pet.")

        serializer = PetCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(publisher=user)
            return Response(
                {"message": "Pet created successfully", "pet": serializer.data},
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PetUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk)
            if pet.publisher != request.user:
                return Response(
                    {"detail": "You do not have permission to update this pet."},
                    status=status.HTTP_403_FORBIDDEN,
                )

        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found or not owned by you."}, status=status.HTTP_404_NOT_FOUND)

        serializer = PetCreateSerializer(pet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PetDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk)
            if pet.publisher != request.user:
                return Response(
                    {"detail": "You do not have permission to delete this pet."},
                    status=status.HTTP_403_FORBIDDEN,
                )

        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found or not owned by you."}, status=status.HTTP_404_NOT_FOUND)

        pet.delete()
        return Response(
            {"detail": f"Pet '{pet.name}' deleted successfully."},
            status=status.HTTP_204_NO_CONTENT,
        )


class AllPetsView(APIView):
    def get(self, request, *args, **kwargs):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SinglePetView(APIView):
    def get(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk)
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = PetSerializer(pet)
        return Response(serializer.data, status=status.HTTP_200_OK)


class AdopterAdoptedPetsView(APIView):
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


class AdoptPetView(APIView):
    """
    View for handling pet adoption.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request, pk, *args, **kwargs):
        if request.user.role != 'adopter':
            raise PermissionDenied(
                {"detail": "You do not have permission to adopt pets."})

        try:
            pet = Pet.objects.get(pk=pk, adopt_status="AVAILABLE")
        except Pet.DoesNotExist:
            raise NotFound(
                {"detail": "Pet not available for adoption or does not exist."})

        if not pet.is_approved:
            raise PermissionDenied(
                {"detail": "This pet has not been approved for adoption."})

        pet.adopt_status = "ADOPTED"
        pet.is_adopted = True
        pet.is_booked = False
        pet.save()
        return Response(
            {"detail": f"Pet '{pet.name}' adopted successfully."},
            status=status.HTTP_200_OK
        )


class PublisherPetListView(APIView):
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

        publiser_pets = Pet.objects.filter(publisher=user)
        serializer = PetSerializer(publiser_pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


