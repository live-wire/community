# Generated by Django 2.1.5 on 2019-02-11 20:47

import community.validators
from django.db import migrations, models
import teacher.models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0006_instructor'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='image',
            field=models.FileField(blank=True, upload_to=teacher.models.get_upload_path, validators=[community.validators.validate_image_file_extension]),
        ),
    ]
