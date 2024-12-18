from django.urls import path
from .views import *

urlpatterns = [
    path('manage-pets/', ManagePetsView.as_view(), name='manage_pets'),
    path('pets/<int:pk>/approve/', ManagePetsView.as_view(), name='approve_pet'),
    path('pets/<int:pk>/edit-approval/',
         ManagePetsView.as_view(), name='edit-approval'),
    path('pets/<int:pk>/remove/', ManagePetsView.as_view(), name='remove_pet'),
    path('create-pets/', PetCreateView.as_view(), name='create_pet'),
    path('update-pet/<int:pk>/', PetUpdateView.as_view(), name='update_pet'),
    path('delete-pet/<int:pk>/', PetDeleteView.as_view(), name='delete_pet'),
    path('all-pets/', AllPetsView.as_view(), name='all_pets'),
    path('single-pet/<int:pk>/', SinglePetView.as_view(), name='single_pet'),
    path('adopter-adopted-pets/', AdopterAdoptedPetsView.as_view(),
         name='adopter_adopted_pets'),
    path('adopt-pet/<int:pk>/', AdoptPetView.as_view(), name='adopt_pet'),
    path('publisher-pets/', PublisherPetListView.as_view(), name='publisher-pets'),
]
