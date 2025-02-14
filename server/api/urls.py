from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView, TokenObtainPairView
from shop.views import StatusServer

from api.auth.resourceview import Register
from api.shop.resourceview import (ShopProductViewSet, ShopProductReviewViewSet, ShopProductPostViewSet,
                                   ShopProductOnlyReadViewSet,
                                   ShopProductPriceListViewSet, ShopListViewSet, ShopProductListViewSetPagination,
                                   ProductCategoryViewSet, ProductImgListViewSet, ProductInfoViewSet)

router = routers.DefaultRouter()
router.register('shop', ShopProductViewSet)
router.register('product-info', ProductInfoViewSet)
router.register('product-img', ProductImgListViewSet, basename='product-img')
router.register('shop-post', ShopProductPostViewSet, basename='shopPost')
router.register('product-price', ShopProductPriceListViewSet, basename='shopPrice')
router.register('shop-list', ShopListViewSet, basename='shopList')
router.register('shop-list-page', ShopProductListViewSetPagination, basename='shopListPagination')
router.register('category-list', ProductCategoryViewSet, basename='categoryList')
router.register('review', ShopProductReviewViewSet, basename='review')
router.register('review-list', ShopProductOnlyReadViewSet, basename='reviewList')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/login/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('auth/register/', Register.as_view(), name='register'),
    path('status/', StatusServer.as_view(), name='status_server'),
]
