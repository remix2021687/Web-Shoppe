from rest_framework import permissions

class IsAdminOnlyCanEdit(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user == request.user.is_staff or request.user.is_superuser