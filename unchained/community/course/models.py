from django.db import models

class Course(models.Model):
	# image = models.TextField(default='')
	# cover_image = models.TextField(default='')
	created = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100, blank=False)
	code = models.CharField(max_length=20, blank=True, default='')
	institution = models.ForeignKey('institution.Institution', related_name='courses', on_delete=models.CASCADE)
	class Meta:
		ordering = ('created',)
