# Generated by Django 2.0.7 on 2018-09-15 23:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0004_auto_20180915_2353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='department',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
