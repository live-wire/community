from django.db import models
from django.contrib.auth.models import User
from course.models import Course

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100, blank=True)
    institution = models.ForeignKey('institution.Institution', related_name='students', on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, blank=True)

