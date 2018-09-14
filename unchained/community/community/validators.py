import os
from django.core.exceptions import ValidationError

def validate_course_file_extension(value):
    ext = os.path.splitext(value.name)[1]
    valid_extensions = ['.pdf']
    if not ext.lower() in valid_extensions:
        raise ValidationError(u'Unsupported file extension.')

def validate_image_file_extension(value):
    ext = os.path.splitext(value.name)[1]
    valid_extensions = ['.jpg', '.png']
    if not ext.lower() in valid_extensions:
        raise ValidationError(u'Unsupported file extension.')
