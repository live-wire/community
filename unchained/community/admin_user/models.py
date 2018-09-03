from django.db import models
from django.contrib.auth.models import User

class AdminUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    institution = models.ForeignKey('institution.Institution', related_name='admins', on_delete=models.CASCADE)

# Create your models here.
