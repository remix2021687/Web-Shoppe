# Generated by Django 5.0.3 on 2024-11-09 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0038_alter_productimglist_name_alter_productinfo_material_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimglist',
            name='name',
            field=models.CharField(default='Xvc9Ex41noa1zdyVKOaUzdHD8F5CCPaW', editable=False, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='shopproduct',
            name='sku',
            field=models.IntegerField(default=750, editable=False),
        ),
    ]