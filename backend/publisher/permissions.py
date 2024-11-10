from rest_framework.permissions import BasePermission
from .models import User


class IsAdminOrPublisher(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and (
            request.user.is_superuser or request.user.role == 'PET_PUBLISHER'
        )
