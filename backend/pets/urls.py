from django.urls import path
from .views import *

urlpatterns = [
    path('create-pets/', PetCreateView.as_view(), name='create_pet'),
    path('approve-pet/<int:pk>/', ApprovePetView.as_view(), name='approve_pet'),
    path('pets/<int:pk>/edit-approval/',
         EditApprovalView.as_view(), name='edit-approval'),
    path('pets/<int:pk>/remove/', RemovePetView.as_view(), name='remove-pet'),
    path('singel-pet/<int:pk>/', SinglePetView.as_view(), name='single_pet'),
    path('update-pet/<int:pk>/', PetUpdateView.as_view(), name='update_pet'),
    path('delete-pet/<int:pk>/', PetDeleteView.as_view(), name='delete_pet'),
    path('addopt-pet/<int:pk>/', AdoptPetView.as_view(), name='adopt_pet'),
    path('all-pets/', AllPetsView.as_view(), name='all_pets'),
    path('manage-pets/', ManagePetsView.as_view(), name='manage_pets'),
    path('published-pets/', MyPublishedPets.as_view(), name='mypublishedpets'),
    path('request-pets/', MyPublishingRequestPets.as_view(), name='mypublishingrequestpets'),
]
