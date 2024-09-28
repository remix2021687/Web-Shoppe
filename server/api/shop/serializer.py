from django.contrib.auth.models import User
from rest_framework import serializers

from shop.models import ShopProduct, ProductReview, ProductImgList, ProductInfo, ProductInfoMaterial, Shop, Category


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('id', 'name', 'email', 'company_description')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


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
    shop = ShopSerializer(read_only=True)

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'sale', 'stock', 'shop', 'preview_image')


class ShopProductSerializer(serializers.ModelSerializer):
    reviews = ProductReviewSerializer(many=True, required=False)
    img_list = ProductImgListSerializer(many=True, required=True)
    product_info = ProductInfoSerializer(many=True, source='info')
    category = CategorySerializer(many=True, read_only=True)
    shop = ShopSerializer(read_only=True)

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'description_product', 'preview_image', 'img_list', 'sale', 'stock', 'sku',
                  'shop', 'category', 'product_info', 'reviews')
