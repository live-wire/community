from django.db import models
from django.contrib.auth.models import User
from course.models import Course

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uid = models.CharField(max_length=100, unique=True, blank=True)
    department = models.CharField(max_length=100, blank=True)
    institution = models.ForeignKey('institution.Institution', related_name='teachers', on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, blank=True)

    def __str__(self):
    	return '%s' % (self.user.username)

class Instructor(models.Model):
	teacher = models.ForeignKey('teacher.Teacher', related_name='instructors', on_delete=models.CASCADE)
	course = models.ForeignKey('course.Course', related_name='instructors', on_delete=models.CASCADE)