from django.db import models
from community.validators import validate_image_file_extension
import os

from PIL import Image as Img
from io import StringIO

def get_upload_path(instance, filename):
	return os.path.join( "courseimages",
	  "%s" % instance.institution.title, "course_%d_%s" % (instance.id, instance.title), filename)

class Course(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100, blank=False)
	code = models.CharField(max_length=20, blank=True, default='')
	institution = models.ForeignKey('institution.Institution', related_name='courses', on_delete=models.CASCADE)
	image = models.FileField(upload_to=get_upload_path, validators = [validate_image_file_extension], blank=True)
	cover_image = models.FileField(upload_to=get_upload_path, validators = [validate_image_file_extension], blank=True)

	def __str__(self):
		return '%s - %s' % (self.code, self.title)
	
	class Meta:
		ordering = ('created',)
