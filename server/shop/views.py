from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response


class StatusServer(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        return Response({}, status=status.HTTP_200_OK)