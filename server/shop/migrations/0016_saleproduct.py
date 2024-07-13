# Generated by Django 5.0.3 on 2024-07-13 14:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0015_remove_productinfo_materials_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SaleProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_sale', models.BooleanField(default=False)),
                ('sale', models.IntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sale', to='shop.shopproduct')),
            ],
        ),
    ]
