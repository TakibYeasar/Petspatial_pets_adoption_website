from django.urls import path
from .views import PublisherListView, PublisherDetailView, PublisherHardDeleteView

urlpatterns = [
    path('publishers/', PublisherListView.as_view(), name='publisher-list'),
    path('publishers/<int:pk>/', PublisherDetailView.as_view(),
         name='publisher-detail'),
    path('publishers/<int:pk>/hard-delete/',
         PublisherHardDeleteView.as_view(), name='publisher-hard-delete'),
]
