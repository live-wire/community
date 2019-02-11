from django.db import models
from django.contrib.auth.models import User
from community.validators import validate_image_file_extension
import os

def get_upload_path(instance, filename):
    return os.path.join( "adminimages",
      "%s" % instance.institution.title, "admin_%d_%s" % (instance.user.id, instance.user.username), filename)

class Administrator(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uid = models.CharField(max_length=100, unique=True, blank=True)
    institution = models.ForeignKey('institution.Institution', related_name='administrators', on_delete=models.CASCADE)
    image = models.FileField(upload_to=get_upload_path, validators = [validate_image_file_extension], blank=True)
    
    def __str__(self):
    	return '%s' % (self.user.username)
# Create your models here.
