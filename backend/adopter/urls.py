# adopters/urls.py
from django.urls import path
from .views import AdopterListView, AdopterDetailView, AdopterSoftDeleteView

urlpatterns = [
    path("adopters/", AdopterListView.as_view(), name="adopter-list"),
    path("adopters/<int:id>/", AdopterDetailView.as_view(), name="adopter-detail"),
    path("adopters/soft-delete/<int:id>/",
         AdopterSoftDeleteView.as_view(), name="adopter-soft-delete"),
]
