from django.contrib.auth.models import User
from rest_framework import serializers

from shop.models import ShopProduct, ProductReview, ProductImgList, ProductInfo, ProductInfoMaterial


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class ProductImgListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImgList
        fields = ('id', 'name', 'url')


class ProductInfoMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductInfoMaterial
        fields = ('id', 'name', 'product_info')


class ProductInfoSerializer(serializers.ModelSerializer):
    material = ProductInfoMaterialSerializer(many=True)

    class Meta:
        model = ProductInfo
        fields = ('id', 'weight', 'dimentions', 'colours', 'material', 'product')


class ProductReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = ProductReview
        fields = ('id', 'user', 'comment', 'rate', 'product', 'data')


class ShopProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'preview_image')


class ShopProductSerializer(serializers.ModelSerializer):
    reviews = ProductReviewSerializer(many=True, required=False)
    img_list = ProductImgListSerializer(many=True, required=True)
    product_info = ProductInfoSerializer(many=True, source='info')

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'description_product', 'description_company',
                  'stock', 'preview_image', 'category', 'img_list', 'reviews', 'product_info')
