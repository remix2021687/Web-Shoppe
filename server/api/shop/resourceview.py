from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, AllowAny

from shop.models import ShopProduct, ProductReview, Shop
from .serializer import (ProductReviewSerializer,
                         ShopProductListSerializer, ShopProductSerializer, ShopProductPriceSerializer, ShopSerializer)


class ShopProductViewSet(viewsets.ModelViewSet):
    queryset = ShopProduct.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return ShopProductListSerializer

        return ShopProductSerializer


class ShopProductReviewViewSet(viewsets.ModelViewSet):
    queryset = ProductReview.objects.all()
    serializer_class = ProductReviewSerializer
    permission_classes = [IsAdminUser]


class ShopProductPriceListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ShopProduct.objects.all()
    serializer_class = ShopProductPriceSerializer
    permission_classes = [AllowAny]


class ShopListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    permission_classes = [AllowAny]
