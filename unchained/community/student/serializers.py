from rest_framework import serializers
from django.contrib.auth.models import User
from teacher.models import Teacher
from .models import Student


class StudentSerializer(serializers.HyperlinkedModelSerializer):
	# announcements = serializers.HyperlinkedRelatedField(many=True, view_name='announcement-detail', read_only=True)
	# instructors = serializers.HyperlinkedRelatedField(many=True, view_name='teacher-detail', read_only=True)
	# courses = serializers.HyperlinkedRelatedField(many=True, view_name='course-detail', read_only=True)
	first_name = serializers.ReadOnlyField(source='user.first_name')
	last_name = serializers.ReadOnlyField(source='user.last_name')
	email = serializers.ReadOnlyField(source='user.email')
	class Meta:
		model = Student
		fields = ('id', 'url', 'user', 'department', 'institution', 'courses', 'uid', 'first_name', 'last_name', 'email')
		read_only_fields = ('institution', 'user')

class StudentListSerializer(serializers.HyperlinkedModelSerializer):
	# announcements = serializers.HyperlinkedRelatedField(many=True, view_name='announcement-detail', read_only=True)
	# instructors = serializers.HyperlinkedRelatedField(many=True, view_name='teacher-detail', read_only=True)
	# courses = serializers.HyperlinkedRelatedField(many=True, view_name='course-detail', read_only=True)
	first_name = serializers.ReadOnlyField(source='user.first_name')
	last_name = serializers.ReadOnlyField(source='user.last_name')
	email = serializers.ReadOnlyField(source='user.email')
	class Meta:
		model = Student
		fields = ('id', 'url', 'user', 'department', 'institution', 'uid', 'first_name', 'last_name', 'email')
		read_only_fields = ('institution', 'user')