from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from .models import Pet
from .serializers import PetSerializer, PetCreateSerializer


class PetCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user

        # Check if the user has the role of 'publisher' or 'admin'
        if user.role not in ['publisher', 'admin']:
            raise PermissionDenied(
                "You do not have permission to create a pet.")

        # Deserialize and validate data
        serializer = PetCreateSerializer(data=request.data)
        if serializer.is_valid():
            # Save the pet instance with the publisher set to the current user
            pet = serializer.save(publisher=user)
            return Response(
                {"message": "Pet created successfully", "pet": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApprovePetView(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk)
            
            if pet.is_approved:
                return Response(
                    {"detail": f"Pet '{pet.name}' is already approved."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found."}, status=HTTP_404_NOT_FOUND)

        pet.is_approved = True
        pet.adopt_status = "AVAILABLE"  # Assuming 'AVAILABLE' means approved
        pet.save()
        return Response(
            {"detail": f"Pet '{pet.name}' approved successfully."},
            status=status.HTTP_200_OK,
        )


class EditApprovalView(APIView):
    """
    View to edit the approval status of a pet by admin.
    """
    permission_classes = [IsAdminUser]

    def patch(self, request, pk, *args, **kwargs):
        # Retrieve the pet by its primary key (pk)
        pet = Pet.objects.get(pk=pk)

        # Extract approval status from the request
        is_approved = request.data.get("is_approved", None)
        if is_approved is None:
            return Response(
                {"detail": "The 'is_approved' field is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Update approval status
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


class RemovePetView(APIView):
    """
    View to remove a pet by admin.
    """
    permission_classes = [IsAdminUser]

    def delete(self, request, pk, *args, **kwargs):
        # Retrieve the pet by its primary key (pk)
        pet = Pet.objects.get(pk=pk)

        # Delete the pet
        pet.delete()

        return Response(
            {"detail": f"Pet '{pet.name}' has been successfully removed."},
            status=status.HTTP_200_OK,
        )
        
        
class SinglePetView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk)
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found."}, status=HTTP_404_NOT_FOUND)

        serializer = PetSerializer(pet)
        return Response(serializer.data, status=HTTP_200_OK)


class PetUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk, publisher=request.user)
            
            if pet.publisher != request.user and not request.user.is_staff:
                return Response(
                    {"detail": "You do not have permission to update this pet."},
                    status=status.HTTP_403_FORBIDDEN,
                )
                
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found or not owned by you."}, status=HTTP_404_NOT_FOUND)

        serializer = PetCreateSerializer(pet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class PetDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk, *args, **kwargs):
        try:
            pet = Pet.objects.get(pk=pk, publisher=request.user)
            
            if pet.publisher != request.user and not request.user.is_staff:
                return Response(
                    {"detail": "You do not have permission to delete this pet."},
                    status=status.HTTP_403_FORBIDDEN,
                )
                
        except Pet.DoesNotExist:
            return Response({"detail": "Pet not found or not owned by you."}, status=HTTP_404_NOT_FOUND)

        pet.delete()
        return Response(
            {"detail": f"Pet '{pet.name}' deleted successfully."},
            status=status.HTTP_204_NO_CONTENT,
        )


class AdoptPetView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk, *args, **kwargs):
        try:
            # Retrieve the pet by ID and check if its adoption status is AVAILABLE
            pet = Pet.objects.get(pk=pk, adopt_status="AVAILABLE")
        except Pet.DoesNotExist:
            raise NotFound(
                {"detail": "Pet not available for adoption or does not exist."})

        if not pet.is_approved:
            return Response(
                {"detail": "This pet has not been approved for adoption."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Update the pet's adoption details
        pet.adopt_status = "ADOPTED"
        pet.is_adopted = True
        pet.is_booked = False  # Ensure the pet is no longer booked
        pet.save()

        return Response(
            {"detail": f"Pet '{pet.name}' adopted successfully."},
            status=status.HTTP_200_OK
        )


class AllPetsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class MyPublishedPets(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        pets = Pet.objects.filter(publisher=request.user)
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MyPublishingRequestPets(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        pets = Pet.objects.filter(is_approved=False, is_adopted=False).exclude(publisher=request.user)
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
