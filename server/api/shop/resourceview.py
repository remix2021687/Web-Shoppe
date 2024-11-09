from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAdminUser
from .pagination import ShopListPagination

from shop.models import ShopProduct, ProductReview, Shop, Category, ProductImgList, ProductInfo
from .permission import IsAdminOnlyCanEdit
from .serializer import (ProductReviewListSerializer,
                         ProductReviewPostSerializer,
                         ShopProductListSerializer, ProductReviewReadOnlyListSerializer,
                         ProductReviewReadOnlySerializer, ProductInfoSerializer, ProductImgListSerializer,
                         ShopProductPostSerializer, ShopProductSerializer,
                         ShopProductPriceSerializer, ShopSerializer, CategorySerializer)


class ShopProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ShopProduct.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_class(self):
        if self.action == 'list':
            return ShopProductListSerializer

        return ShopProductSerializer


class ShopProductReviewViewSet(viewsets.ModelViewSet):
    queryset = ProductReview.objects.all()
    permission_classes = [AllowAny, IsAdminOnlyCanEdit]

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductReviewListSerializer

        return ProductReviewPostSerializer


class ShopProductPostViewSet(viewsets.ModelViewSet):
    queryset = ShopProduct.objects.all()
    serializer_class = ShopProductPostSerializer
    permission_classes = [IsAdminUser]


class ShopProductOnlyReadViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ShopProduct.objects.all()
    permission_classes = [IsAdminOnlyCanEdit]

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductReviewReadOnlyListSerializer
        return ProductReviewReadOnlySerializer


class ProductInfoViewSet(viewsets.ModelViewSet):
    queryset = ProductInfo.objects.all()
    serializer_class = ProductInfoSerializer
    permission_classes = [IsAdminUser]


class ProductImgListViewSet(viewsets.ModelViewSet):
    queryset = ProductImgList.objects.all()
    serializer_class = ProductImgListSerializer
    permission_classes = [IsAdminUser]


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


class ProductCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
