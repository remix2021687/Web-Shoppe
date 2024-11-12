from rest_framework import serializers

from shop.models import ShopProduct, ProductReview, ProductImgList, ProductInfo, Shop, Category


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('name', 'company_description', 'facebook_link', 'instagram_link', 'x_link')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class ProductImgListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImgList
        fields = ('name', 'url', 'product')


class ProductInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductInfo
        fields = ('weight', 'dimensions', 'colours', 'material')


class ProductReviewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = ('id', 'first_name', 'last_name', 'email', 'comment', 'rate', 'product')


class ProductReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = ('id', 'first_name', 'last_name', 'comment', 'rate', 'data')


class ProductReviewReadOnlyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProduct
        fields = ('id', 'name')


class ProductReviewReadOnlySerializer(serializers.ModelSerializer):
    reviews = ProductReviewListSerializer(read_only=True, many=True)

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'reviews')


class ProductReviewRateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        exclude = ['id', 'last_name', 'first_name', 'comment', 'email', 'data', 'product']


class ShopProductPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopProduct
        fields = ('id', 'price', 'sale')

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if representation['sale'] > 0:
            representation['price_sale'] = round(representation['price'] * (1 - representation['sale'] / 100))

        return representation


class ShopProductPostSerializer(serializers.ModelSerializer):
    product_info = ProductInfoSerializer(required=True)
    category = CategorySerializer(many=True, write_only=True)

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'sale', 'description_product', 'shop', 'category', 'stock', 'product_info')


class ShopProductListSerializer(serializers.ModelSerializer):
    shop = ShopSerializer(required=True)
    category = CategorySerializer(read_only=True, many=True)
    preview_img = ProductImgListSerializer(read_only=True, many=True, source="product_img")

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if representation['sale'] > 0:
            representation['price_sale'] = round(representation['price'] * (1 - representation['sale'] / 100))

        if representation['preview_img']:
            representation['preview_img'] = representation['preview_img'][0]

        return representation

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'category', 'sale', 'stock', 'shop', 'preview_img')


class ShopProductSerializer(serializers.ModelSerializer):
    reviews = ProductReviewListSerializer(many=True, required=False)
    product_info = ProductInfoSerializer(read_only=True)
    img_list = ProductImgListSerializer(many=True, read_only=True, source='product_img')
    category = CategorySerializer(many=True, read_only=True)
    shop = ShopSerializer(read_only=True)

    class Meta:
        model = ShopProduct
        fields = ('id', 'name', 'price', 'description_product', 'sale', 'stock', 'sku', 'img_list',
                  'shop', 'product_info', 'category', 'reviews')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['reviews'] = ProductReviewListSerializer(instance.reviews, many=True).data

        if representation['sale'] > 0:
            counting_sale_percent = round(representation['price'] * (1 - representation['sale'] / 100))

            representation['price_sale'] = counting_sale_percent

        if representation['reviews']:
            counting_product_rate = (sum([rate['rate'] for rate in representation['reviews']]) /
                                     len(representation['reviews']))

            representation['product_rate'] = counting_product_rate

        return representation
