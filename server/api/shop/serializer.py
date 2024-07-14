from django.contrib.auth.models import User
from rest_framework import serializers

from shop.models import ShopProduct, ProductReview, ProductImgList, ProductInfo, ProductInfoMaterial, Shop


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('id', 'name', 'product')


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


class ShopProductPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProduct
        fields = ('id', 'price')


class ShopProductListSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(many=True, read_only=True, source='shops')

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'sale', 'stock', 'shop', 'preview_image')


class ShopProductSerializer(serializers.ModelSerializer):
    reviews = ProductReviewSerializer(many=True, required=False)
    img_list = ProductImgListSerializer(many=True, required=True)
    product_info = ProductInfoSerializer(many=True, source='info')
    shop = ShopSerializer(many=True, read_only=True, source='shops')

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'stock', 'description_product', 'description_company', 'preview_image',
                  'category', 'img_list', 'product_info', 'reviews')
