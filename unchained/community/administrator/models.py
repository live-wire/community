from django.db import models
from django.contrib.auth.models import User

class Administrator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uid = models.CharField(max_length=100, unique=True, blank=True)
    institution = models.ForeignKey('institution.Institution', related_name='administrators', on_delete=models.CASCADE)
    def __str__(self):
    	return '%s' % (self.user.username)
# Create your models here.
