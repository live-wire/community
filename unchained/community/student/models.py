from django.db import models
from django.contrib.auth.models import User
from course.models import Course
from community.validators import validate_image_file_extension

def get_upload_path(instance, filename):
    return os.path.join( "studentimages",
      "%s" % instance.institution.title, "student_%d_%s" % (instance.user.id, instance.user.username), filename)

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100, blank=True)
    uid = models.CharField(max_length=100, unique=True, blank=True)
    institution = models.ForeignKey('institution.Institution', related_name='students', on_delete=models.CASCADE)
    image = models.FileField(upload_to=get_upload_path, validators = [validate_image_file_extension], blank=True)
    courses = models.ManyToManyField(Course, blank=True)

    def __str__(self):
    	return '%s' % (self.user.username)