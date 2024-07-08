from django.contrib.auth.models import User
from rest_framework import serializers

from shop.models import ShopProduct, ProductReview


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


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

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'description_product', 'description_company',
                  'stock', 'preview_image', 'category', 'reviews')
