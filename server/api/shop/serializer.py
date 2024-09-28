from django.contrib.auth.models import User
from rest_framework import serializers

from shop.models import ShopProduct, ProductReview, ProductImgList, ProductInfo, Shop, Category


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
        fields = ('id', 'username', 'first_name', 'last_name')


class ProductImgListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImgList
        fields = ('id', 'name', 'url')


class ProductInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductInfo
        fields = ('id', 'weight', 'dimentions', 'colours', 'material')


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
    product_info = ProductInfoSerializer(read_only=True)
    category = CategorySerializer(many=True, read_only=True)
    shop = ShopSerializer(read_only=True)

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'description_product', 'preview_image', 'img_list', 'sale', 'stock', 'sku',
                  'shop', 'product_info', 'category', 'reviews')
