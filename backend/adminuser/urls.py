# urls.py
from django.urls import path
from .views import *

urlpatterns = [
    # path('admins/', AdminListView.as_view(), name='admin-list'),
    # path('admins/<int:pk>/', AdminDetailView.as_view(), name='admin-detail'),
    # path('admins/soft-delete/<int:pk>/',
    #      AdminSoftDeleteView.as_view(), name='admin-soft-delete'),
]
