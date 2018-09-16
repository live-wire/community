from rest_framework import serializers
from django.contrib.auth.models import User
from .models import FileUpload

class FileUploadSerializer(serializers.HyperlinkedModelSerializer):
	course_id = serializers.ReadOnlyField(source='course.id')
	institution_id = serializers.ReadOnlyField(source='institution.id')
	class Meta:
		model = FileUpload
		fields = ('title', 'url', 'id', 'course', 'course_id', 'institution', 'institution_id', 'description', 'file')
		read_only_fields = ('institution', 'course')
