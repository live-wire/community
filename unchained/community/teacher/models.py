from django.db import models
from django.contrib.auth.models import User
from course.models import Course
from community.validators import validate_image_file_extension
import os

def get_upload_path(instance, filename):
    return os.path.join( "teacherimages",
      "%s" % instance.institution.title, "teacher_%d_%s" % (instance.user.id, instance.user.username), filename)

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uid = models.CharField(max_length=100, unique=True, blank=True)
    department = models.CharField(max_length=100, blank=True)
    institution = models.ForeignKey('institution.Institution', related_name='teachers', on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, blank=True)
    image = models.FileField(upload_to=get_upload_path, validators = [validate_image_file_extension], blank=True)
    
    def __str__(self):
    	return '%s' % (self.user.username)

class Instructor(models.Model):
	teacher = models.ForeignKey('teacher.Teacher', related_name='instructors', on_delete=models.CASCADE)
	course = models.ForeignKey('course.Course', related_name='instructors', on_delete=models.CASCADE)