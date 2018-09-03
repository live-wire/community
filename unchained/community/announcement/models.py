from django.db import models

class Announcement(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=False)
    content = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='owner', on_delete=models.CASCADE)
    institution = models.ForeignKey('institution.Institution', related_name='announcements', on_delete=models.CASCADE)
    course = models.ForeignKey('course.Course', related_name='announcements', on_delete=models.CASCADE)

    class Meta:
        ordering = ('created',)