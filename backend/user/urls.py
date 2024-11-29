from django.urls import path
from .views import *

urlpatterns = [
    path('all-users/', AllUserView.as_view(), name='all_users'),
    path("profile/", UserProfileView.as_view(), name="user-profile"),
    path("update-profile/", UserProfileUpdateView.as_view(),
         name="user-profile-update"),
    path("adopted-pets/", AdoptedPetsListView.as_view(), name="adopted-pets"),
    path("published-pets/", PublishedPetsListView.as_view(), name="published-pets"),
    path("adopter-adoption-requests/", AdopterAdoptionRequestsView.as_view(),
         name="adopter-adoption-requests"),
    path("publisher-adoption-requests/", PublisherAdoptionRequestsView.as_view(),
         name="publisher-adoption-requests"),
    path("publishing-requests-pending/", PendingPublishingRequestsView.as_view(),
         name="pending-publishing-requests"),
    path('manage-users/', ManageUsersAPIView.as_view(), name='manage-users'),
]
