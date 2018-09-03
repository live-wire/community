from django.db import models
from django.contrib.auth.models import User

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100)
    institution = models.ForeignKey('institution.Institution', related_name='students', on_delete=models.CASCADE)
