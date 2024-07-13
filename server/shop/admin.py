from django.contrib import admin

from .models import Shop, Category, ProductReview, ShopProduct, ProductImgList, ProductInfoMaterial, ProductInfo

admin.site.register(
    [Shop, Category, ProductReview, ShopProduct, ProductImgList, ProductInfoMaterial, ProductInfo])
