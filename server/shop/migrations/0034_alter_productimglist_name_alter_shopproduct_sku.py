# Generated by Django 5.0.3 on 2024-11-08 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0033_alter_productimglist_name_alter_shopproduct_sku'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimglist',
            name='name',
            field=models.CharField(default='lxj4BQIBWYf5d6cIURxCLrHt4I5eEUkq', editable=False, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='sku',
            field=models.IntegerField(blank=True, default=244, editable=False),
        ),
    ]
