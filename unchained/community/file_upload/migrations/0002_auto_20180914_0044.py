# Generated by Django 2.0.7 on 2018-09-14 00:44

from django.db import migrations, models
import file_upload.models


class Migration(migrations.Migration):

    dependencies = [
        ('file_upload', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileupload',
            name='file',
            field=models.FileField(upload_to=file_upload.models.get_upload_path),
        ),
    ]
