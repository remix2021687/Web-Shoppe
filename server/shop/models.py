import uuid

from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Shop(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False, null=True)
    email = models.EmailField(unique=True, blank=False, null=True)
    facebook_link = models.URLField(blank=False, null=False, default='')
    instagram_link = models.URLField(blank=False, null=False, default='')
    x_link = models.URLField(blank=False, null=False, default='')
    company_description = models.TextField(max_length=4000, blank=False, null=False, default="")

    def __str__(self):
        return f"Shop Name: {self.name}"


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"Category Name: {self.name}"


class ProductImgList(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False, null=True)
    url = models.ImageField(upload_to="uploads/products/%Y/%m/%d/")

    def __str__(self):
        return f'Image Name: {self.name}'

class ProductInfo(models.Model):
    weight = models.FloatField(max_length=100, blank=False, null=False)
    dimentions = models.CharField(max_length=100, blank=False, null=False)
    colours = models.CharField(max_length=100, blank=False, null=False)
    material = models.CharField(max_length=100, blank=False, null=False, default='')

    def __str__(self):
        return f'Material: {self.material}'


class ProductReview(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    email = models.EmailField(blank=False, null=False, default='')
    first_name = models.CharField(max_length=50, blank=False, null=False, default='')
    last_name = models.CharField(max_length=50, blank=False, null=False, default='')
    comment = models.TextField(blank=False, null=False)
    rate = models.IntegerField(blank=True, null=False, default=0, validators=[
        MinValueValidator(0),
        MaxValueValidator(5)
    ])
    product = models.ForeignKey('shop.ShopProduct', on_delete=models.CASCADE, related_name='reviews')
    data = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['data']

    def __str__(self):
        return f"Review by {self.first_name} {self.last_name}, rate: {self.rate}"


class ShopProduct(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=50, unique=True, null=False, blank=False)
    price = models.FloatField(blank=True, null=False, default=0)
    description_product = models.TextField(max_length=3000, null=False, blank=False)
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE, related_name='products_shop', default=None, null=True)
    stock = models.IntegerField(blank=True, null=False, default=0)
    product_info = models.ForeignKey('ProductInfo', on_delete=models.CASCADE, related_name='products_info',
                                     default='', null=False)
    sku = models.UUIDField(default=uuid.uuid4, editable=False)
    sale = models.IntegerField(blank=True, default=0)
    img_list = models.ManyToManyField('ProductImgList', related_name='img_list')
    category = models.ManyToManyField(Category)

    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        return f"Product {self.name}, Price: {self.price}, Sale: {self.sale} %"
