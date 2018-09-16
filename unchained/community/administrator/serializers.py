from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Administrator


class AdministratorSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Administrator
		fields = ('id', 'url', 'user', 'institution', 'uid')
		read_only_fields = ('institution', 'user')