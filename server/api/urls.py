from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView, TokenObtainPairView

from api.shop.resourceview import (ShopProductViewSet, ShopProductReviewViewSet, ShopProductOnlyReadViewSet,
                                   ShopProductPriceListViewSet, ShopListViewSet, ShopProductListViewSetPagination,
                                   ProductCategoryViewSet)

router = routers.DefaultRouter()
router.register('shop', ShopProductViewSet)
router.register('product-price', ShopProductPriceListViewSet, basename='shopPrice')
router.register('shop-list', ShopListViewSet, basename='shopList')
router.register('shop-list-page', ShopProductListViewSetPagination, basename='shopListPagination')
router.register('category-list', ProductCategoryViewSet, basename='categoryList')
router.register('review', ShopProductReviewViewSet, basename='review')
router.register('review-list', ShopProductOnlyReadViewSet, basename='reviewList')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/login/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
