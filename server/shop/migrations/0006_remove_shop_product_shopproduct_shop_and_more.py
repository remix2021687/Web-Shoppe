# Generated by Django 5.0.3 on 2024-07-21 20:44

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_shop_email_alter_shop_product_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shop',
            name='product',
        ),
        migrations.AddField(
            model_name='shopproduct',
            name='shop',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='products_shop', to='shop.shop'),
        ),
        migrations.AlterField(
            model_name='productreview',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
