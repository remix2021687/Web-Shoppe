import uuid

from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Shop(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False, null=True)

    def __str__(self):
        return f"Shop Name: {self.name}"


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Category Name: {self.name}"


class ProductImgList(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False, null=True)
    product = models.ForeignKey('ShopProduct', on_delete=models.CASCADE, related_name='img_list')
    url = models.ImageField(upload_to="uploads/products/%Y/%m/%d/")

    def __str__(self):
        return f'Image Name: {self.name}, Product: | {self.product} |'


class ProductInfoMaterial(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False, null=True)
    product_info = models.ForeignKey('ProductInfo', on_delete=models.CASCADE, related_name='material', default='')

    def __str__(self):
        return f'Material: {self.name}'


class ProductInfo(models.Model):
    weight = models.FloatField(max_length=100, blank=False, null=False)
    dimentions = models.CharField(max_length=100, blank=False, null=False)
    colours = models.CharField(max_length=100, blank=False, null=False)
    product = models.ForeignKey('ShopProduct', on_delete=models.CASCADE, related_name='info', default='')

    def __str__(self):
        return f'Material: {self.weight}'


class ProductReview(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField(blank=False, null=False)
    rate = models.IntegerField(blank=True, null=False, default=0, validators=[
        MinValueValidator(0),
        MaxValueValidator(5)
    ])
    product = models.ForeignKey('shop.ShopProduct', on_delete=models.CASCADE, related_name='reviews')
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user}, rate: {self.rate}"


class ShopProduct(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length=50, unique=True, null=False, blank=False)
    price = models.FloatField(blank=True, null=False, default=0)
    description_product = models.TextField(max_length=3000, null=False, blank=False)
    description_company = models.TextField(max_length=2000, null=False, blank=False)
    stock = models.IntegerField(blank=True, null=False, default=0)
    preview_image = models.ImageField(upload_to='uploads/preview_img/', null=False, blank=False, default='')
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)

    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        return f"Product {self.name}, Price: {self.price}"
