from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from api.shop.resourceview import ShopProductViewSet, ShopProductReviewViewSet

router = routers.DefaultRouter()
router.register('shop', ShopProductViewSet)
router.register('review', ShopProductReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
