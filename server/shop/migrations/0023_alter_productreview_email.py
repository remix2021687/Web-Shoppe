# Generated by Django 5.0.3 on 2024-10-04 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0022_productreview_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productreview',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, unique=True),
        ),
    ]
