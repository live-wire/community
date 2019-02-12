# Generated by Django 2.1.5 on 2019-02-11 20:59

import administrator.models
import community.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0002_administrator_uid'),
    ]

    operations = [
        migrations.AddField(
            model_name='administrator',
            name='image',
            field=models.FileField(blank=True, upload_to=administrator.models.get_upload_path, validators=[community.validators.validate_image_file_extension]),
        ),
    ]
