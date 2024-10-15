from django.contrib import admin

from .models import Shop, Category, ProductReview, ShopProduct, ProductImgList, ProductInfo

admin.site.register(
    [Shop, Category, ProductReview, ShopProduct, ProductImgList, ProductInfo]
)
