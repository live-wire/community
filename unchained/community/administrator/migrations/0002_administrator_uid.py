# Generated by Django 2.0.7 on 2018-09-15 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='administrator',
            name='uid',
            field=models.CharField(blank=True, max_length=100, unique=True),
        ),
    ]
