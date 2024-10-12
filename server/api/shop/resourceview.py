from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .pagination import ShopListPagination

from shop.models import ShopProduct, ProductReview, Shop
from .permission import IsAdminOnlyCanEdit
from .serializer import (ProductReviewListSerializer,
                         ProductReviewPostSerializer,
                         ShopProductListSerializer, ShopProductSerializer,
                         ShopProductPriceSerializer, ShopSerializer)


class ShopProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ShopProduct.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return ShopProductListSerializer

        return ShopProductSerializer


class ShopProductReviewViewSet(viewsets.ModelViewSet):
    queryset = ProductReview.objects.all()
    serializer_class = ProductReviewPostSerializer
    permission_classes = [AllowAny, IsAdminOnlyCanEdit]

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductReviewListSerializer

        return ProductReviewPostSerializer


class ShopProductPriceListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ShopProduct.objects.all()
    serializer_class = ShopProductPriceSerializer
    permission_classes = [AllowAny]


class ShopListViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    permission_classes = [AllowAny]


class ShopProductListViewSetPagination(viewsets.ReadOnlyModelViewSet):
    queryset = ShopProduct.objects.filter(stock__gt=0)
    serializer_class = ShopProductListSerializer
    permission_classes = [AllowAny]
    pagination_class = ShopListPagination
