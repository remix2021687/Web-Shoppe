# Generated by Django 5.0.3 on 2024-07-08 15:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_alter_shopproduct_img_list'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shopproduct',
            name='img_list',
        ),
        migrations.AddField(
            model_name='shopproduct',
            name='preview_image',
            field=models.ImageField(default='', upload_to='uploads/preview_img/'),
        ),
        migrations.CreateModel(
            name='ProductImgList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True, unique=True)),
                ('img', models.ImageField(upload_to='uploads/products/%Y/%m/%d/')),
                ('shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.shopproduct')),
            ],
        ),
    ]
