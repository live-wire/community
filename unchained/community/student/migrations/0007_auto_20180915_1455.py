# Generated by Django 2.0.7 on 2018-09-15 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0006_auto_20180915_1454'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='uid',
            field=models.CharField(blank=True, max_length=100, unique=True),
        ),
    ]
