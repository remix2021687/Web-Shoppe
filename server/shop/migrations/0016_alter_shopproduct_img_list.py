# Generated by Django 5.0.3 on 2024-09-30 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0015_remove_productimglist_product_shopproduct_img_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopproduct',
            name='img_list',
            field=models.ManyToManyField(to='shop.productimglist'),
        ),
    ]
