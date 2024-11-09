# Generated by Django 5.0.3 on 2024-11-09 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0037_alter_productimglist_name_alter_shopproduct_sku'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimglist',
            name='name',
            field=models.CharField(default='VlCPIHy7UKoEi7e2fJXvi6JdRfTyLbEi', editable=False, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='productinfo',
            name='material',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='price',
            field=models.FloatField(blank=True),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='sale',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='sku',
            field=models.IntegerField(default=800, editable=False),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='stock',
            field=models.IntegerField(),
        ),
    ]
