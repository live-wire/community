from django.db import models


class Institution(models.Model):
	owner = models.ForeignKey('auth.User', related_name='institution', on_delete=models.SET_NULL, null=True)
	created = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100, blank=True, default='')
	detail = models.TextField()

	def __str__(self):
		return self.title

	class Meta:
		ordering = ('created',)


