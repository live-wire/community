from django.db import models
from institution.models import Institution
from course.models import Course
from community.validators import validate_course_file_extension
import os
from django.core.exceptions import ValidationError

def get_upload_path(instance, filename):
	return os.path.join( "coursefiles",
	  "%s" % instance.institution.title, "course_%d_%s" % (instance.course.id, instance.course.title), filename)

# Create your models here.
class FileUpload(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100, blank=False)
	description = models.TextField()
	institution = models.ForeignKey('institution.Institution', related_name='file_uploads', on_delete=models.CASCADE)
	course = models.ForeignKey('course.Course', related_name='file_uploads', on_delete=models.CASCADE)
	file = models.FileField(upload_to=get_upload_path, validators = [validate_course_file_extension])
	def save(self, *args, **kwargs):
		if self.course.institution != self.institution:
			raise ValidationError(u'Institution and course mismatch')
		else:
			super(FileUpload, self).save(*args, **kwargs)
	class Meta:
		ordering = ('created',)
	def __str__(self):
		return '%s - %s' % (self.course.title, self.title)